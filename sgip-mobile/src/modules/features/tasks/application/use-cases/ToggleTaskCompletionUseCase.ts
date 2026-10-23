import type { Task } from '../../domain/entities/Task';
import type { TaskRepository } from '../../domain/ports/TaskRepository';

export class ToggleTaskCompletionUseCase {
  constructor(private readonly repository: TaskRepository) {}

  execute(id: string, completed: boolean): Promise<Task> {
    return this.repository.setCompleted(id, completed);
  }
}