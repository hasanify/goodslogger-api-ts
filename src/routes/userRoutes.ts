import express from 'express';
import UserController from '../controllers/userController';
import UserValidator from '../middlewares/validators/userValidator';
import {attachHandler} from '../utils/helpers';

const router = express.Router();

router.get('/profile', UserController.getProfile);
router.patch('/profile', attachHandler(UserValidator.checkCreateUser()), UserController.getProfile);

module.exports = router;
