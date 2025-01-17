import express from 'express';
import dotenv from 'dotenv';
import initializeApp from './app/app.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

initializeApp(app);


app.listen(port, () => console.log(`Server is running on port: ${port}`));