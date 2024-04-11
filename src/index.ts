import express, { Request, Response } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { userRoutes } from './routes/user.routes'
import { authRoutes } from './routes/auth.routes'
import { taskRoutes } from './routes/task.routes'
import prisma from './database/prisma.database'

dotenv.config()
const port = process.env.PORT || 3333
const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRoutes())
app.use('/auth', authRoutes())
app.use('/tasks', taskRoutes())

app.get("/", async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()

    return res.json(users)
})

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`)
})
