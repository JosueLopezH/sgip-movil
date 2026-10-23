import { GetProjectsUseCase } from '../application/use-cases/GetProjectsUseCase';
import { ProjectApiRepository } from './ProjectApiRepository';

const repository = new ProjectApiRepository();

export const getProjectsUseCase = new GetProjectsUseCase(repository);
export const getProjectByIdUseCase = new GetProjectsUseCase(repository);