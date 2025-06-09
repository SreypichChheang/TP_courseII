import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./task.entity";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>
  ) {}

  // This method THROWS if task not found
  async getTask(id: number): Promise<Task> {
    const task = await this.tasksRepo.findOne({
      where: { id },
      relations: ["user"],
    });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  findAll() {
    return this.tasksRepo.find({ relations: ["user"] });
  }

  createTask(body: Partial<Task>) {
    const task = this.tasksRepo.create(body);
    return this.tasksRepo.save(task);
  }

  async updateTask(id: number, body: Partial<Task>) {
    await this.tasksRepo.update(id, body);
    return this.getTask(id); // re-fetch to check existence
  }

  async deleteTask(id: number) {
    const task = await this.getTask(id); // ensures it exists
    return this.tasksRepo.remove(task);
  }
}
