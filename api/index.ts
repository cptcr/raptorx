import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import registerRoutes from './helpers/RegisterRoutes';

const app = express();

// Example middleware: parse JSON bodies.
app.use(express.json());

const ApproutesDir = path.join(__dirname, 'routes/Application');
const ClientDir = path.join(__dirname, 'routes/Client');
const PublicDir = path.join(__dirname, 'routes/Public');

registerRoutes(app, ApproutesDir);
registerRoutes(app, ClientDir);
registerRoutes(app, PublicDir);

export default app;
