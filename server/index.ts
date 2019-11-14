
import express, {Application} from "express";
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

class Server{

    public app:Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors())
    }

    routes():void{
       this.app.use('/api',userRoutes);
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended:false}));
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server On Port",this.app.get('port'));  
        })
    }
}
const server = new Server();
server.start();