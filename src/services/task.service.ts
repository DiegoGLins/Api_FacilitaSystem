import prisma from "../database/prisma.database";
import { ResponseDto } from "../dto/response.dto";
import { TaskCreateDto, TaskUpdateDto } from "../dto/task.dto";

class TaskService {
    public async create(data: TaskCreateDto): Promise<ResponseDto> {
        const newTask = await prisma.task.create({
            data: {
                name: data.name,
                description: data.description,
                userId: data.userId
            }
        })
        return {
            ok: true,
            code: 201,
            message: "Tarefa criada com sucesso",
            data: newTask
        }
    }

    public async index(userId: string): Promise<ResponseDto> {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            return {
                ok: false,
                code: 404,
                message: "Usuário não encontrado"
            }
        }

        const tasks = await prisma.task.findMany({
            where: { userId },
        })

        return {
            ok: true,
            code: 200,
            message: "Tarefas listadas com sucesso",
            data: tasks
        }
    }

    public async update(data: TaskUpdateDto): Promise<ResponseDto> {
        const findTask = await prisma.task.findUnique({
            where: {
                id: data.taskId
            }
        })
        if (!findTask) {
            return {
                ok: false,
                code: 400,
                message: "Tarefa para editar não encontrada"
            }
        }

        const updated = await prisma.task.update({
            where: {
                id: data.taskId
            }, data: {
                name: data.name,
                description: data.description
            }
        })
        return {
            ok: true,
            code: 200,
            message: "Tarefa editada com sucesso",
            data: updated
        }

    }

    public async delete(taskId: string) {
        const findTask = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        })

        if (!findTask) {
            return {
                ok: false,
                code: 404,
                message: "Tarefa para excluir não encontrada"
            }
        }

        await prisma.task.delete({
            where: {
                id: taskId
            }
        })

        return {
            ok: true,
            code: 200,
            message: 'Tarefa excluida com sucesso'
        }
    }
}

export default new TaskService()