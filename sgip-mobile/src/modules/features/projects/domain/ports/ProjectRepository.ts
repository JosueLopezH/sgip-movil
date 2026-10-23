import type { Project } from '../entities/Project';

export interface ProjectRepository {
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project>;
}