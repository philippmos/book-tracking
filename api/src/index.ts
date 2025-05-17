import express from "express";
import cors from "cors";
import './di-container';
import { container } from "tsyringe";
import { swaggerDocs, swaggerSpec, swaggerUiHandler } from "./swagger";
import { Controller } from "tsoa";
import { RegisterRoutes } from "./routes/routes";

const app = express();
const port = 3001;

app.use(cors());

app.use((request, _response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
});

app.use(express.json());

app.use('/apidocs', swaggerUiHandler, swaggerDocs);

app.get('/swagger.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

RegisterRoutes(app);

app.use((_request, _response, next) => {
  (Controller as any).getControllerInstance = (controllerClass: any) => {
    return container.resolve(controllerClass);
  };
  next();
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
