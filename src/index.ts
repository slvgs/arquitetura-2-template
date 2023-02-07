import express from 'express'
import cors from 'cors'
import { AccountController } from './controller/AccountController'
import { userRouter } from './router/userRouter'
import { accountsRouter } from './router/accountsRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

const accountController = new AccountController()

app.use("/users", userRouter)

app.get("/accounts", accountsRouter)
app.get("/accounts/:id/balance", accountsRouter)
app.post("/accounts", accountsRouter)
app.put("/accounts/:id/balance", accountsRouter)
