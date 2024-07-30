import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
