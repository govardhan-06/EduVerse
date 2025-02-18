import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({ error: 'Unauthorized' });
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
};

export default authMiddleware;