import prisma from '../database/prisma.database'
import { compare } from "bcrypt"
import jwt from 'jsonwebtoken'

class AuthService {
    public async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            return {
                ok: false,
                code: 404,
                message: "Usuário não encontrado"
            }
        }

        const validatePassword = await compare(password, user.password)

        if (!validatePassword) {
            return {
                ok: false,
                code: 401,
                message: "Email ou senha incorretos"
            }
        }

        const authHeader = {
            id: user.id,
            name: user.name,
            email: user.email
        }

        const token = jwt.sign(authHeader, `${process.env.SECRET_WORD}`)

        return {
            ok: true,
            code: 200,
            message: "Login realizado com sucesso",
            data: authHeader, token
        }
    }
}

export default new AuthService()