import express from 'express';
import {signUp,signIn} from '../controllers/jwt_controller.js';
import { generateNonce, verifySignature } from '../controllers/web3Auth_controller.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

router.post('/generate-nonce', generateNonce);
router.post('/verify-sign', verifySignature);

export default router;