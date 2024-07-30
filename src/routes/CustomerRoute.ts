import express, { Request, Response, NextFunction } from 'express';
import {
    AddToCart,
    CreateOrder,
    CreatePayment,
    CustomerLogin,
    CustomerSignUp,
    CustomerVerify,
    DeleteCart,
    EditCustomerProfile,
    GetCart,
    GetCustomerProfile,
    GetOrderById,
    GetOrders,
    RequestOtp,
    VerifyOffer,
} from '../controllers';
import { Authenticate } from '../middleware';
import { Offer } from '../models/Offer';

const router = express.Router();

router.post('/signup', CustomerSignUp);
router.post('/login', CustomerLogin);

router.use(Authenticate);

router.patch('/verify', CustomerVerify);
router.get('/otp', RequestOtp);

router.get('/profile', GetCustomerProfile);
router.patch('/profile', EditCustomerProfile);

//Cart
router.post('/cart', AddToCart);
router.get('/cart', GetCart);
router.delete('/cart', DeleteCart);

//Apply Offers
router.get('/offer/verify/:id', VerifyOffer);

//Payment
router.post('/create-payment', CreatePayment);

//Order
router.post('/create-order', CreateOrder);
router.get('/orders', GetOrders);
router.get('/order/:id', GetOrderById);

export { router as CustomerRoute };
