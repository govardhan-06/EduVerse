import {ethers} from 'ethers';
import jwt from 'jsonwebtoken';
import { addUser_wallet, getUserbyWallet, updateNonce } from '../utils/db.js';

const generateNonce = async (req, res) => {
    try {
      const { walletAddress } = req.body;
      let user = await getUserbyWallet(walletAddress);
      const nonce = Math.floor(Math.random() * 1000000).toString();
  
      if (user) {
        await updateNonce(walletAddress, nonce);
      } else {
        await addUser_wallet({ "walletAddress":walletAddress, "nonce":nonce });
      }
      res.status(200).json({ nonce });
    } catch (error) {
      res.status(500).json({ message: 'Error generating nonce', error });
    }
};

const verifySignature = async (req, res) => {
    try {
        const { walletAddress, signature } = req.body;
        const user = await getUserbyWallet(walletAddress);
        if (!user) return res.status(400).json({ message: 'User not found' });
    
        const signerAddr = ethers.utils.verifyMessage(user.nonce, signature);
        if (signerAddr.toLowerCase() !== walletAddress.toLowerCase()) {
          return res.status(400).json({ message: 'Signature verification failed' });
        }
    
        const token = jwt.sign({ userId: user._id, walletAddress }, process.env.JWT_SECRET);
        res.status(200).json({ token });
      } catch (error) {
        res.status(500).json({ message: 'Error verifying signature', error });
      }
    };

export {generateNonce, verifySignature};