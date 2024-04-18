export interface TaskDto {
    id: string
    name: string;
    description: string;
    createdAt: Date;
    userId: string;
}

export type TaskUpdateDto = Partial<TaskDto> & { taskId: string }

export type TaskCreateDto = Omit<TaskDto, 'id' | 'createdAt'>