import { NextFunction, Request, Response } from "express";

async function registerMiddleware(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).send({
            ok: false,
            code: 400,
            message: "Por favor informe todos os campos"
        })
    }
    next()
}

export default registerMiddleware