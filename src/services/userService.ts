import UserInstance, {UserAttributes} from '../models/User';

class UserService {
  static getProfile = async () => {
    const result = await UserInstance.findAll();
    return result as [] as UserAttributes[];
  };
}

export default UserService;
