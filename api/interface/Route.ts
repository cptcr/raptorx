import { Request, Response } from 'express';

export default interface Route {
  method: "POST" | "DELETE" | "PATCH" | "PUT";
  endpoint: string;
  execute: (req: Request, res: Response) => void;
}
