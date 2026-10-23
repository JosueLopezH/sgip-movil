import type { Task } from '../../domain/entities/Task';
import type { TaskRepository } from '../../domain/ports/TaskRepository';

export class GetTaskByIdUseCase {
  constructor(private readonly repository: TaskRepository) {}

  execute(id: string): Promise<Task> {
    return this.repository.findById(id);
  }
}