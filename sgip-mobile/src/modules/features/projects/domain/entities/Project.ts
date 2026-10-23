export type ProjectStatus =
  | 'PENDING'
  | 'STARTED'
  | 'IN_PROCESS'
  | 'COMPLETED'
  | 'CANCELED';

export interface ProjectManager {
  id: string;
  name: string;
  username: string;
}

export interface ProjectTask {
  id: string;
  name: string;
  completed: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string | null;
  status: ProjectStatus;
  budget: string | null;
  startDate: string | null;
  endDate: string | null;
  manager: ProjectManager;
  tasks: ProjectTask[];
}