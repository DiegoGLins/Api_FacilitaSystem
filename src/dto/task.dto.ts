export interface TaskDto {
    id: string
    name: string;
    description: string;
    userId: string;
    createdAt: Date;
}

export type TaskUpdateDto = Partial<TaskDto> & { taskId: string }

export type TaskCreateDto = Omit<TaskDto, 'id' | 'createdAt'>