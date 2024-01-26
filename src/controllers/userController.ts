import {NextFunction, Request, Response} from 'express';
import UserService from '../services/userService';

class UserController {
  static async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const profiles = await UserService.getProfile();
      res.json(profiles);
    } catch (error) {
      next(error);
    }
  }
  static async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      res.send('ok');
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
