// src/routes/users.routes.ts
import { Router } from 'express';
import LoginController from '../controllers/login.controller';

class LoginRoutes{
  public router : Router;
  public loginController :LoginController;

  constructor() {
    this.loginController = new LoginController();
    this.router = Router();
    this.initializateRoutes();
  }

  private initializateRoutes(){
    this.router.post('/', this.loginController.login);
  }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;