import { Request, Response } from "express";
import taskService from "../services/task.service";

class TaskController {
    public async createTask(req: Request, res: Response) {
        const { id } = req.authUser
        const { name, description } = req.body

        try {
            const result = await taskService.create({
                name,
                description,
                id
            })
            if (result.ok) {
                res.status(201).send(result)
            }
            else {
                return res.status(500).send({
                    ok: false,
                    code: 500,
                    message: "Erro ao criar tarefa"
                })
            }

        } catch (error: any) {
            res.status(500).send({
                ok: false,
                code: 500,
                message: error.toString()
            })
        }
    }

    public async index(req: Request, res: Response) {
        const { userId } = req.params
        try {
            const result = await taskService.index(userId)

            return res.status(result.code).send(result)
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                code: 500,
                message: error.toString()
            })
        }
    }
    public async update(req: Request, res: Response) {
        const { taskId } = req.params
        const { id } = req.authUser
        const { name, description } = req.body
        try {
            const result = await taskService.update({
                taskId,
                id,
                name,
                description
            })

            return res.status(result.code).send(result)
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                code: 500,
                message: error.toString()
            })
        }
    }

    public async delete(req: Request, res: Response) {
        const { taskId } = req.params

        try {
            const result = await taskService.delete(taskId)

            return res.status(result.code).send(result)

        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                code: 500,
                message: error.toString()
            })
        }
    }
}

export default TaskController