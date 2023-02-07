import  express  from "express";
import { UserController } from "../controller/UserController";




export const userRouter = express.Router();


const  userController = new UserController



//apenas barra pois ja vai estar declarado no index que o caminho é users
userRouter.get("/", userController.getUsers)
userRouter.post("/", userController.createUser)