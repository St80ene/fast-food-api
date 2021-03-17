import express from 'express';
// import multer from 'multer';
// import Datauri from 'datauri';
// import path from 'path';
import User from './controllers/User';
import Food from './controllers/Food';
// import Food from './controllers/Food';
import auth from './middlewares/auth';
import { signUpValidation } from './middlewares/validation';
import { logInValidation } from './middlewares/validation';

const router = express.Router();
// const storage = multer.memoryStorage();
// const multerUploads = multer({ storage });
// const dUri = new Datauri();
// const dataUri = (req) =>
//   dUri.format(
//     path.extname('/home/etiene/Pictures/thinktwice').toString(),
//     req.buffer
//   );
router.post('/auth/signup', signUpValidation, User.signUp);
router.post('/auth/login', logInValidation, User.logIn);
router.get('/user', auth, User.getUser);
// router.post('/image', auth, multerUploads.single('food-image'), Food.cloudFile);
router.post('/food', auth, Food.createFood);

export default router;
