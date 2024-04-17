export interface TaskDto {
    id: string
    name: string;
    description: string;
    userId: string;
    createdAt: Date;
    code: number
}

export type TaskUpdateDto = Partial<TaskDto> & { taskId: string }

export type TaskCreateDto = Omit<TaskDto, 'createdAt' | 'code' | 'id'>