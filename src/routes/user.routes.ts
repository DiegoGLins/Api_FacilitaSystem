import { Router } from "express"
import { UserController } from "../controller/user.controller"
import registerMiddleware from "../middlewares/register.middleware"

export const userRoutes = () => {
    const router = Router()
    const controller = new UserController()
    router.post('/', registerMiddleware, controller.create)

    return router
}