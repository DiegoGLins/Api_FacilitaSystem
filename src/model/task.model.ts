export class Task {
    public id: string;
    public name: string;
    public description: string;
    public userId: string

    constructor(id: string, userId: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.description = description;
    }
}
