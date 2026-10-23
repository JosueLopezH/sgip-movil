import type { Project } from '../../domain/entities/Project';
import type { ProjectRepository } from '../../domain/ports/ProjectRepository';

export class GetProjectsUseCase {
  constructor(private readonly repository: ProjectRepository) {}

  execute(): Promise<Project[]> {
    return this.repository.findAll();
  }
}