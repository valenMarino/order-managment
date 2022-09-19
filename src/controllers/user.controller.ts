import { Request, Response, NextFunction } from 'express';
import UserServices from '../services/user.services';

class UserController{
    usersServices: UserServices;
    constructor() {
        this.usersServices = new UserServices();
    }

    getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        let users = await this.usersServices.getUsers();
        res.status(200).json({ users: users });
    }

    getUser = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        const {id} = req.params;
        let user = await this.usersServices.getUser(parseInt(id));
        res.status(200).json({ user: user });
    }

    saveUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { username, password, name, address, phone } = req.body;
        let user = await this.usersServices.addUser(username, password, name, address, phone);
        res.status(200).json({ user: user });
    }
}
export default UserController;