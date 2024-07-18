import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import "reflect-metadata";

const PORT = process.env.PORT;

const bootstrap = async () => {

    const app = express();

    await dbConnection()

    await App(app);

    app.listen(PORT || 8000, () => {
        console.log(`Listening to port 8000 ${PORT}`);
    })
}

bootstrap();