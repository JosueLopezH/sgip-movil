import { GetTaskByIdUseCase } from '../application/use-cases/GetTaskByIdUseCase';
import { GetTasksUseCase } from '../application/use-cases/GetTasksUseCase';
import { ToggleTaskCompletionUseCase } from '../application/use-cases/ToggleTaskCompletionUseCase';
import { TaskApiRepository } from './TaskApiRepository';

const repository = new TaskApiRepository();

export const getTasksUseCase = new GetTasksUseCase(repository);
export const getTaskByIdUseCase = new GetTaskByIdUseCase(repository);
export const toggleTaskCompletionUseCase = new ToggleTaskCompletionUseCase(repository);