import express from "express";
import './di-container';
import { container } from "tsyringe";
import { BookController } from "./controllers/BookController";

const app = express();
const port = 3001;

app.use((request, _response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
});

app.use(express.json());

app.use('/api/books', container.resolve(BookController).router);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
