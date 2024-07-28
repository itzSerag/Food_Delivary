import express from 'express';
import 'dotenv/config';

import App from './ExpressApp';
import dbConnection from './services/Database';

const PORT = 3000;

const bootstrap = async () => {

    console.log('Starting the server');
    console.log('Connecting to the database' , process.env.MONGO_URI);
    

    const app = express();

    await dbConnection()

    await App(app);

    app.listen(PORT, () => {
        console.log(`Listening to port 3000 ${PORT}`);
    })
}

bootstrap();