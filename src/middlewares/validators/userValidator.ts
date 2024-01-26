import {body} from 'express-validator';

class UserValidator {
  checkCreateUser = () => {
    return [body('username').notEmpty().withMessage('username is required')];
  };
}

export default new UserValidator();
