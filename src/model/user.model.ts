import { Task } from "./task.model"

export class User {
    public tasks: Task[]

    constructor(private _id: string, public name: string, public email: string, private _password: string) {
        this.name = name
        this.email = email
        this.tasks = []
    }

    public getId(): string {
        return this._id
    }

    public getPassword(): string {
        return this._password
    }

    public detailUser() {
        return {
            id: this._id,
            name: this.name,
            email: this.email
        }
    }
}