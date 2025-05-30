import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(+id);
  }

  @Post()
  createTask(@Body() body: Partial<Task>) {
    return this.taskService.createTask(body);
  }
  @Patch('/:id/done')
  markTaskAsDone(@Param('id') id: string) {
    return this.taskService.updateTask(+id, { completedAt: new Date() });
  }

  @Patch('/:id/pending')
  markTaskAsPending(@Param('id') id: string) {
    return this.taskService.updateTask(+id, { completedAt: null });
  }


  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(+id);
  }
}