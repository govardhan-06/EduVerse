import express from 'express';
import {signUp,signIn} from '../controllers/jwt_controller.js';
import { generateNonce, verifySignature } from '../controllers/web3Auth_controller.js';

const authRouter = express.Router();

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);

authRouter.post('/generate-nonce', generateNonce);
authRouter.post('/verify-sign', verifySignature);

export default authRouter;