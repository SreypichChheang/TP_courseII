import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<import("./task.entity").Task[]>;
    getTask(id: number): Promise<import("./task.entity").Task>;
    create(createTaskDto: CreateTaskDto): Promise<import("./task.entity").Task>;
    markTaskAsDone(id: number): Promise<import("./task.entity").Task>;
    markTaskAsPending(id: number): Promise<import("./task.entity").Task>;
    deleteTask(id: number): Promise<import("./task.entity").Task>;
}
