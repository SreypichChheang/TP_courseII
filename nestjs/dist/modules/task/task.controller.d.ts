import { TaskService } from './task.service';
import { Task } from './task.entity';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<Task[]>;
    getTask(id: string): Promise<Task | null>;
    createTask(body: Partial<Task>): Promise<Task>;
    markTaskAsDone(id: string): Promise<Task | null>;
    markTaskAsPending(id: string): Promise<Task | null>;
    deleteTask(id: string): Promise<import("typeorm").DeleteResult>;
}
