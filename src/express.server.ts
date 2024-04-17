import cors from "cors"
import express, { Request, Response } from "express"
import { authRoutes } from "./routes/auth.routes"
import { taskRoutes } from "./routes/task.routes"
import { userRoutes } from "./routes/user.routes"

export const createServer = () => {
    const app = express()
    app.use(express.json())
    app.use(cors())

    app.use("/auth", authRoutes())
    app.use('/users', userRoutes())
    app.use('/tasks', taskRoutes())

    app.get('/', (req: Request, res: Response) => {
        return res.status(200).send({ ok: true, message: "Api-Facilita-System" })
    })
    return app
}