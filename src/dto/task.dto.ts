export interface TaskDto {
    id?: string
    name: string;
    description: string
}

export type TaskUpdateDto = Partial<TaskDto> & { taskId: string }