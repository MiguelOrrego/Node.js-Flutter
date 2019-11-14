import {Request,Response} from 'express';
import faker from 'faker';

class UserControllers{

    public async users(req:Request,res:Response){
        res.json({message:'user list'})

    }
    public async create(req:Request,res:Response):Promise<void>{
        for (let i = 0; i < 5; i++) {
            
        }

        res.json({message:' 5 user created'})
    }

}

export const userController=new UserControllers();