import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';  
import authRouter from './src/microservices/auth/routes/authService_routes.js';
import videoRouter from './src/microservices/yt-courses/routes/video_routes.js';
import otherRouter from './src/microservices/others/routes/other_routes.js';  
dotenv.config();

const app=express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/video',videoRouter);
app.use('/api/v1/others',otherRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
