import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get("/:id")
  async getTask(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.getTask(id); // this method throws
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch("/:id/done")
  markTaskAsDone(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.updateTask(id, { completedAt: new Date() });
  }

  @Patch("/:id/pending")
  markTaskAsPending(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.updateTask(id, { completedAt: null });
  }

  @Delete("/:id")
  deleteTask(@Param("id", ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}
