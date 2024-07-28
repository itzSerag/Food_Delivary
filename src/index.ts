import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import App from './ExpressApp';
import dbConnection from './services/Database';

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
    console.log('Starting the server');

    const app = express();

    await dbConnection();
    console.log('Connecting to the database', process.env.MONGO_URI);

    await App(app);

    app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    });
};

bootstrap();
