import { Request, Response, NextFunction } from 'express';
import User, {UserMap} from '../models/user.model'
import database from '../database/database';
import { sign } from "jsonwebtoken";


class LoginController{
    constructor() {
    }

    login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { username, password } = req.body;
        UserMap(database);
        const user = await User.findOne({where:{ username : username }});
        if(user?.password != password){
            res.status(400).json("Invalid credentials")
        }else{
            const key = process.env.JWT_SHARED_KEY;
            const token = sign(
                { UserId: user?.id },
                key != undefined ? key : "",
                {
                    expiresIn: 60 * 60 * 24,
                }
            );
            res.status(200).json({token:token});
        }
    }
}
export default LoginController;