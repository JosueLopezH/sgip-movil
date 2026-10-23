import type { Task } from '../entities/Task';

export interface TaskRepository {
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task>;
  setCompleted(id: string, completed: boolean): Promise<Task>;
}