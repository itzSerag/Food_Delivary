import mongoose, { Schema, Document, Types } from 'mongoose';

interface DeliveryUserDoc extends Document {
    email: string;
    password: string;
    salt: string;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    pincode: string; // know where to deliver
    verified: boolean;
    otp: number;
    otp_expiry: Date;
    lat: number;
    lng: number;
    isAvailable: boolean;
    vendors: Types.ObjectId[];
}

const DeliveryUserSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        salt: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        address: { type: String },
        phone: { type: String, required: true },
        pincode: { type: String },
        verified: { type: Boolean },
        otp: { type: Number },
        otp_expiry: { type: Date },
        lat: { type: Number },
        lng: { type: Number },
        isAvailable: { type: Boolean, default: false },
        vendors: [{ type: Schema.Types.ObjectId, ref: 'Vendor' }],
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.salt;
            },
        },
        timestamps: true,
    },
);

const DeliveryUser = mongoose.model<DeliveryUserDoc>(
    'deliveryUser',
    DeliveryUserSchema,
);

export { DeliveryUser };
