import { apiClient } from '@/shared/http/apiClient';
import type { Task } from '../domain/entities/Task';
import type { TaskRepository } from '../domain/ports/TaskRepository';

export class TaskApiRepository implements TaskRepository {
  findAll(): Promise<Task[]> {
    return apiClient.get<Task[]>('/tasks');
  }

  findById(id: string): Promise<Task> {
    return apiClient.get<Task>(`/tasks/${id}`);
  }

  setCompleted(id: string, completed: boolean): Promise<Task> {
    return apiClient.patch<Task>(`/tasks/${id}`, { completed });
  }
}