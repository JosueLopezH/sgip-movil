export interface TaskProject {
  id: string;
  name: string;
}

export interface TaskAssignee {
  id: string;
  name: string;
  username: string;
}

export interface Task {
  id: string;
  name: string;
  description: string | null;
  completed: boolean;
  dueDate: string | null;
  project: TaskProject;
  assignee: TaskAssignee | null;
}