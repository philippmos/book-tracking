import express from "express";
import bookRoutes from './controllers/bookController';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
