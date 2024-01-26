import express, {Application, NextFunction, Request, Response, json} from 'express';
import sanitize from '../middlewares/sanitize';
import routes from '../routes';
import {handleControllerError} from '../utils/helpers';

const createServer = () => {
  const app: Application = express();
  app.use(json({limit: '5mb'}));
  app.use(sanitize);

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  routes(app);

  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    handleControllerError(res, error, next);
  });

  return app;
};

export default createServer;
