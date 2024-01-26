import bcrypt from 'bcrypt';
import {NextFunction, Response} from 'express';
import moment from 'moment';
import {BCRYPT_SALT_ROUND} from '../config/secrets';
import {handleValidationErrors} from '../middlewares/validators';
import {
  DEVICE_NOT_FOUND_ERROR,
  FAILED_TO_CALCULATE,
  FORMULA_EVALUATE_ERROR,
  INTERNAL_SERVER_ERROR,
  TYPE_NOT_FOUND_ERROR,
  UNREFERENCED_PARAM,
  UNREGISTERED_PARAMS_REF,
} from './errors';

export const formatTime = (timestamp: string) => {
  return moment(timestamp).format('DD-MM-YYYY, HH:mm:ss');
};

export const handleControllerError = (res: Response, error: any, next: NextFunction) => {
  switch (true) {
    case error.message === TYPE_NOT_FOUND_ERROR.message:
      res.status(TYPE_NOT_FOUND_ERROR.code).json(TYPE_NOT_FOUND_ERROR);
      break;

    case error.message === DEVICE_NOT_FOUND_ERROR.message:
      res.status(DEVICE_NOT_FOUND_ERROR.code).json(DEVICE_NOT_FOUND_ERROR);
      break;

    case error.message === FORMULA_EVALUATE_ERROR.message:
      res.status(FORMULA_EVALUATE_ERROR.code).json(FORMULA_EVALUATE_ERROR);
      break;

    case error.message === UNREGISTERED_PARAMS_REF.message:
      res.status(UNREGISTERED_PARAMS_REF.code).json(UNREGISTERED_PARAMS_REF);
      break;

    case error.message === FAILED_TO_CALCULATE.message:
      res.status(FAILED_TO_CALCULATE.code).json(FAILED_TO_CALCULATE);
      break;

    case error.message === UNREFERENCED_PARAM.message:
      res.status(UNREFERENCED_PARAM.code).json(UNREFERENCED_PARAM);
      break;

    case error.message.includes('missing required parameter - '):
      res.status(400).json({code: 400, message: error.message});
      break;

    case error.message.includes('unregistered parameter - '):
      res.status(400).json({code: 400, message: error.message});
      break;

    default:
      res.status(INTERNAL_SERVER_ERROR.code).json(INTERNAL_SERVER_ERROR);
  }
};

export const hashPassword = async (password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUND);
    return hashedPassword;
  } catch (error) {
    return false;
  }
};

export const isPasswordValid = async (plainTextPassword: string, hashedPassword: string) => {
  try {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const attachHandler = (handler: any[]) => {
  return [...handler, handleValidationErrors];
};
