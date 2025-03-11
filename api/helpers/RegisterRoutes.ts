import fs from "fs";
import path from "path";
import express, { Request, Response } from "express";
import Route from "../interface/Route";

export default function registerRoutes(app: express.Application, routesDir: string): void {
  fs.readdirSync(routesDir).forEach((subfolder) => {
    const subfolderPath = path.join(routesDir, subfolder);
    if (fs.lstatSync(subfolderPath).isDirectory()) {
      fs.readdirSync(subfolderPath).forEach((file) => {
        if (file.endsWith(".js") || file.endsWith(".ts")) {
          const routeModule = require(path.join(subfolderPath, file));
          const route: Route = routeModule.default;
          switch (route.method) {
            case "POST":
              app.post(route.endpoint, (req: Request, res: Response) => route.execute(req, res));
              break;
            case "DELETE":
              app.delete(route.endpoint, (req: Request, res: Response) => route.execute(req, res));
              break;
            case "PATCH":
              app.patch(route.endpoint, (req: Request, res: Response) => route.execute(req, res));
              break;
            case "PUT":
              app.put(route.endpoint, (req: Request, res: Response) => route.execute(req, res));
              break;
            default:
              console.error(`Unsupported method: ${route.method}`);
          }
        }
      });
    }
  });
}