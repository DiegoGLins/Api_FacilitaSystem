import express, { Request, Response } from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { userRoutes } from './routes/user.routes'
import { authRoutes } from './routes/auth.routes'
import { taskRoutes } from './routes/task.routes'

dotenv.config()
const port = process.env.PORT || 3333
const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRoutes())
app.use('/auth', authRoutes())
app.use('/tasks', taskRoutes())

app.get("/", (req: Request, res: Response) => {
    const response = {
        code: 200,
        message: "API is Running",
    }
    return res.status(response.code).send(response)
})

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`)
})
