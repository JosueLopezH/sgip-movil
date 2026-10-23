import { BaseView } from "@/shared/ui/BaseView";

import { useCallback } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { useAsync } from '@/shared/hooks/useAsync';
import { Colors } from '@/shared/theme/colors';
import { formatDate } from '@/shared/utils/format';
import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { ScreenState } from '@/shared/ui/ScreenState';
import {
  getTaskByIdUseCase,
  toggleTaskCompletionUseCase,
} from '../../infrastructure/tasksContainer';

interface TaskDetailViewProps {
  id: string;
}

export function TaskDetailView({ id }: TaskDetailViewProps) {
  const load = useCallback(() => getTaskByIdUseCase.execute(id), [id]);
  const { data, isLoading, error, reload } = useAsync(load);

  const handleToggle = async () => {
    if (!data) {
      return;
    }
    try {
      await toggleTaskCompletionUseCase.execute(data.id, !data.completed);
      await reload();
    } catch (e) {
      Alert.alert(
        'No se pudo actualizar la tarea',
        e instanceof Error ? e.message : 'Intenta de nuevo',
      );
    }
  };

  if (!data) {
    return <ScreenState isLoading={isLoading} error={error} onRetry={reload} />;
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Card>
        <Text style={styles.title}>{data.name}</Text>
        <Badge
          label={data.completed ? 'Completada' : 'Pendiente'}
          color={data.completed ? Colors.success : Colors.warning}
        />
        <Text style={styles.description}>{data.description ?? 'Sin descripción'}</Text>
      </Card>

      <Card>
        <Text style={styles.label}>Proyecto</Text>
        <Text style={styles.value}>{data.project.name}</Text>
        <Text style={styles.label}>Responsable</Text>
        <Text style={styles.value}>{data.assignee?.name ?? 'Sin asignar'}</Text>
        <Text style={styles.label}>Fecha límite</Text>
        <Text style={styles.value}>{formatDate(data.dueDate)}</Text>
      </Card>

      <Pressable style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>
          {data.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 120,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  description: {
    fontSize: 15,
    color: Colors.textSecondary,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  value: {
    fontSize: 16,
    color: Colors.textPrimary,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.onPrimary,
  },
});