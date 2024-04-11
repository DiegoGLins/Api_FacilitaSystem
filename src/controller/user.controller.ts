import { Request, Response } from 'express'
import userService from '../services/user.service'

export class UserController {
    public async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            const result = await userService.createUser({
                name, email, password
            })
            return res.status(result.code).send(result)
        }

        catch (error: any) {
            return res.status(500).send({
                ok: false,
                code: 500,
                message: error.toString()
            })
        }
    }
}