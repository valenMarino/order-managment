import { Request, Response, NextFunction } from 'express';
import User, {UserMap} from '../models/user.model'
import database from '../database/database';
class UserController{
    constructor() {
    }

    getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        UserMap(database);
        const result = await User.findAll();
        res.status(200).json({ users: result });
    }
}
export default UserController;