import { NextFunction, Request, Response } from "express";

async function validateMiddlware(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send({
            ok: false,
            code: 400,
            message: "email ou senha não fornecidos"
        })
    }
    next()
}

export default validateMiddlware