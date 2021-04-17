import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ["andi"];

  getAllTasks() {
    return this.tasks;
  }
}
