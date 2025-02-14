import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { addUser, getUserByEmail } from '../utils/db.js';

const signUp = async (req, res) => {
    try{
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = await addUser({ email, password: hashedPassword });
        const token = jwt.sign({ userId: user.userID }, process.env.JWT_SECRET);
        res.status(201).json({ token });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

const signIn = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        if(!user || user.length === 0) throw new Error('User not found');
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) throw new Error('Invalid password');
        const token = jwt.sign({ userId: user.userID }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}

export {signUp, signIn};