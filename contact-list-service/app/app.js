import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import ContactListRouter from './routes/contact-list-routes.js';

const initializeApp = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect(process.env.MONGO_CONNECTION);
    app.use('/contactlistmanager', ContactListRouter);
}

export default initializeApp;