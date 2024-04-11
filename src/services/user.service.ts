import { ResponseDto } from "../dto/response.dto";
import { UserDto } from "../dto/user.dto";
import prisma from '../database/prisma.database'
import bcrypt from 'bcrypt'
import { User as UserPrisma } from "@prisma/client"
import { User } from "../model/user.model";

class UserService {
    public async createUser(data: UserDto): Promise<ResponseDto> {
        const findUser = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (findUser) {
            return {
                ok: false,
                code: 400,
                message: "Email já cadastrado"
            }
        }

        const passwordHash = await bcrypt.hash(data.password, 10)
        const createUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHash
            }
        })

        return {
            ok: true,
            code: 201,
            message: "Usuário cadastrado com sucesso",
            data: this.mapToModel(createUser).detailUser()
        }
    }

    public mapToModel(user: UserPrisma): User {
        const model = new User(
            user.id,
            user.name,
            user.email,
            user.password
        )
        return model
    }
}

export default new UserService()