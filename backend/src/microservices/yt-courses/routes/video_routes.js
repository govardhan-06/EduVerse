import express from 'express';
import { getytVideo } from '../controllers/video_info.js';
import { generateQuiz } from '../controllers/quiz_generator.js';

const videoRouter = express.Router();

videoRouter.post('/get-yt-video', getytVideo);
videoRouter.post('/quiz', generateQuiz);

export default  videoRouter;