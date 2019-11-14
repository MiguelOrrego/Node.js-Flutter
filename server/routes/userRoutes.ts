import {Router} from 'express';
import {userController} from '../controllers/userController';

class UserRoutes{
public routesUser:Router=Router();

    constructor(){
        this.config();
    }
    config():void{
        this.routesUser.get('/',userController.users)
    }

}

const router = new UserRoutes();
export default router.routesUser;
