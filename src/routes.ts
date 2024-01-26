import {Application} from 'express';
import {readdirSync} from 'fs';
import {join} from 'path';

const routesPath = join(__dirname, 'routes');
const endsWith = 'Routes.ts';

const attachRoutes = async (app: Application) => {
  const routeFiles = readdirSync(routesPath);

  routeFiles.forEach(file => {
    if (file.endsWith(endsWith)) {
      const routePath = `/${file.replace(endsWith, '').toLowerCase()}`;
      const routeModule = require(join(routesPath, file));
      app.use(routePath, routeModule);
    }
  });
};
export default attachRoutes;
