import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const LOG_DIR = path.resolve(__dirname, "../logs");
const LAST_BOOT_FILE = path.resolve(LOG_DIR, ".last-boot");

/**
 * Ensures the logs directory exists
 */
async function ensureLogDirectory() {
    try {
        await fs.mkdir(LOG_DIR, { recursive: true });
    } catch (error) {
        console.error("Error creating logs directory:", error);
    }
}

/**
 * Clears logs if the system has restarted
 */
async function clearLogsOnRestart() {
    try {
        const currentBootTime = os.uptime(); // Get system uptime in seconds
        const currentBootTimestamp = Date.now() - currentBootTime * 1000;

        await ensureLogDirectory();

        if (await fs.stat(LAST_BOOT_FILE).catch(() => false)) {
            const lastBoot = await fs.readFile(LAST_BOOT_FILE, "utf-8");
            if (parseInt(lastBoot) < currentBootTimestamp) {
                // OS has restarted, clearing logs
                console.log("System restart detected. Clearing logs...");
                await fs.rm(LOG_DIR, { recursive: true, force: true });
                await ensureLogDirectory();
            }
        }
        
        // Save the current boot timestamp
        await fs.writeFile(LAST_BOOT_FILE, currentBootTimestamp.toString(), "utf-8");
    } catch (error) {
        console.error("Error clearing logs:", error);
    }
}

/**
 * Writes logs to appropriate file
 */
export default async function writeLogs(options: {
    type: "default" | "debugging";
    useTimestamp?: boolean;
    title: string;
    text: string;
}) {
    try {
        await clearLogsOnRestart();
        await ensureLogDirectory();

        const logFile = options.type === "debugging" ? "debug.txt" : "main.txt";
        const logPath = path.resolve(LOG_DIR, logFile);

        const timestamp = options.useTimestamp ? `[${new Date().toISOString()}] ` : "";
        const logEntry = `${timestamp}${options.title}: ${options.text}\n`;

        await fs.appendFile(logPath, logEntry, "utf-8");
    } catch (error) {
        console.error("Error writing log:", error);
    }
}
