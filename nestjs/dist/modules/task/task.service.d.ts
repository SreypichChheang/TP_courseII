import { Repository } from 'typeorm';
import { Task } from './task.entity';
export declare class TaskService {
    private readonly tasksRepo;
    constructor(tasksRepo: Repository<Task>);
    getTask(id: number): Promise<Task>;
    findAll(): Promise<Task[]>;
    createTask(body: Partial<Task>): Promise<Task>;
    updateTask(id: number, body: Partial<Task>): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
