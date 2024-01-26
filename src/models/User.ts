import {DataTypes, Model} from 'sequelize';
import db from '../config/database';

export interface UserAttributes {
  username: string;
  email: string;
  name: string;
}

class UserInstance extends Model<UserAttributes> {}
UserInstance.init(
  {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'User',
  },
);

export default UserInstance;
