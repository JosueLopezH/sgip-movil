import type { Task } from '../../domain/entities/Task';
import type { TaskRepository } from '../../domain/ports/TaskRepository';

export class GetTasksUseCase {
  constructor(private readonly repository: TaskRepository) {}

  execute(): Promise<Task[]> {
    return this.repository.findAll();
  }
}