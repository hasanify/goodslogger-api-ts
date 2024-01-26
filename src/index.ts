import db from './config/database';
import {PORT} from './config/secrets';
import createServer from './config/server';

const app = createServer();

db.sync({alter: true}).then(sequelize => {
  console.log(`[DATABASE]: Connected to ${sequelize.config.database}`);
  console.log(`[DATABASE]: Host is ${sequelize.config.host}`);
});

app.listen(PORT, async () => {
  console.log(`[SERVER]  : Running at http://localhost:${PORT}`);
});
