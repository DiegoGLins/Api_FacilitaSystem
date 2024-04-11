import { Router } from 'express'
import AuthController from '../controller/auth.controller'
import validateMiddleware from '../middlewares/validate.middleware'

export const authRoutes = () => {
    const router = Router()
    const controller = new AuthController()

    router.post('/', validateMiddleware, controller.create)

    return router
}