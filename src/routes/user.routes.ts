// src/routes/users.routes.ts
import { Router } from 'express';
import UserController from '../controllers/user.controller';
import {authentication} from '../middlewares/authentication'
class UserRoutes{
  public router : Router;
  public userController :UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializateRoutes();
  }

  private initializateRoutes(){
    this.router.get('/', authentication,this.userController.getUsers);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;

