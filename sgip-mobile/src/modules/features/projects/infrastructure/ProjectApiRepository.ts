import { apiClient } from '@/shared/http/apiClient';
import type { Paginated } from '@/shared/types/Paginated';
import type { Project } from '../domain/entities/Project';
import type { ProjectRepository } from '../domain/ports/ProjectRepository';

export class ProjectApiRepository implements ProjectRepository {
  async findAll(): Promise<Project[]> {
    const page = await apiClient.get<Paginated<Project>>('/projects?limit=50');
    return page.data;
  }

  findById(id: string): Promise<Project> {
    return apiClient.get<Project>(`/projects/${id}`);
  }
}