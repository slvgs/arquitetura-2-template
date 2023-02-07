import express  from "express";
import { AccountController } from "../controller/AccountController";




export const accountsRouter = express.Router();

const accountController = new AccountController

accountsRouter.get("/", accountController.getAccounts)
accountsRouter.get("/", accountController.getAccountBalance)
accountsRouter.post("/", accountController.createAccount)
accountsRouter.put("/", accountController.editAccountBalance)
