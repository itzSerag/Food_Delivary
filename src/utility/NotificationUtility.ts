export const GenerateOtp = () => {
    const otp = Math.floor(10000 + Math.random() * 900000);
    let expiry = new Date();
    expiry.setTime(new Date().getTime() + 30 * 60 * 1000);

    return { otp, expiry };
};

export const onRequestOTP = async (otp: number) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    try {
        await client.messages.create({
            body: `Here is your OTP: ${otp}`,
            to: process.env.TWILIO_TO_PHONE_NUMBER, // recipient's phone number
            from: process.env.TWILIO_PHONE_NUMBER, // your Twilio number
        
        }).then((message: any) => {
            console.log(`message sid : ${message.sid}`);
        });

        console.log('OTP sent successfully');
        
        return true;
    } catch (err) {
        console.error('Error sending OTP:', err);
        return false;
    }
};
