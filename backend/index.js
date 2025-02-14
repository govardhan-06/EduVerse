import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';  
import router from './src/microservices/auth/routes/authService_routes.js';  

const app=express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.use('/api/v1/auth',router);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
