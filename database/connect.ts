import mongoose from "mongoose";

export default async function connectDatabase (url: string) {
    await mongoose.connect(url)
}