import { Router } from "express"
import TaskController from "../controller/task.controller"
import authMiddleware from "../middlewares/auth.middleware"

export const taskRoutes = () => {
    const router = Router()
    const controller = new TaskController()
    router.post('/', controller.createTask)
    router.get('/', authMiddleware, controller.index)
    router.put('/:taskId', authMiddleware, controller.update)
    router.delete('/:taskId', authMiddleware, controller.delete)

    return router
}