import express from 'express';
import { getvirSpaces } from '../controller/spaces.js';
import { getvirAvatars } from '../controller/user_profile.js';

const otherRouter = express.Router();

otherRouter.get('/spaces', getvirSpaces);
otherRouter.get('/avatars', getvirAvatars);

export default otherRouter;