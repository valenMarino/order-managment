// src/routes/users.routes.ts
import { Router } from 'express';
import UserController from '../controllers/user.controller';

class UserRoutes{
  public router : Router;
  public userController :UserController;
  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializateRoutes();
  }

  private initializateRoutes(){
    this.router.get('/', this.userController.getUsers);
  }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;

/* const router = Router();
// GET - users
this.router.get('/user', this.userController.getUser);
// GET - users/:id
router.get('/:id', async (req: Request, res: Response) => {
  // TO DO
  const result : string = '';
  res.status(200).json({ user: result });
});
// POST - users
router.post('/', async (req: Request, res: Response) => {
  // TO DO
  res.status(201).json({ user: {} });
});
export default router; */