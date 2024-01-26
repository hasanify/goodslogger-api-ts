import {NextFunction, Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {INCOMPLETE_REQUEST_BODY_ERROR} from '../../utils/errors';

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(INCOMPLETE_REQUEST_BODY_ERROR.code).json({
      code: INCOMPLETE_REQUEST_BODY_ERROR.code,
      message: errors.array()[0].msg,
    });
  }
  next();
};
