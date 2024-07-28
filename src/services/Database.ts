import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://iamserag:iamserag123456789@cluster0.kelyj7l.mongodb.net/Food_Delivery?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
