import { Colors } from '@/shared/theme/colors';
import type { ProjectStatus } from '../domain/entities/Project';

export const projectStatusLabel: Record<ProjectStatus, string> = {
  PENDING: 'Pendiente',
  STARTED: 'Iniciado',
  IN_PROCESS: 'En proceso',
  COMPLETED: 'Completado',
  CANCELED: 'Cancelado',
};

export const projectStatusColor: Record<ProjectStatus, string> = {
  PENDING: Colors.warning,
  STARTED: Colors.primary,
  IN_PROCESS: Colors.primary,
  COMPLETED: Colors.success,
  CANCELED: Colors.danger,
};