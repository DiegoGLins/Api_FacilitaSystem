import authService from "../services/auth.service"
import { Request, Response } from "express"

class AuthController {
    public async create(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const result = await authService.login(email, password)
            return res.status(result?.code!).send(result)
        }
        catch (error: any) {
            res.status(500).send({
                ok: false,
                code: 500,
                message: error.toString()
            })
        }
    }
}

export default AuthController

