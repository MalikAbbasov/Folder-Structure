import  express  from 'express';
import { addUser, deleteUserById, getAllUsers, getUsersById, updateUserById } from '../controller/UserController.js';
import { myLogger } from '../middleware/loggerMiddleware.js';
export const userRouter = express.Router();


userRouter.get("/",myLogger,getAllUsers);
userRouter.get("/:id",myLogger,getUsersById);
userRouter.post("/",myLogger,addUser);
userRouter.put("/:id",myLogger, updateUserById);
userRouter.delete("/:id",myLogger, deleteUserById);