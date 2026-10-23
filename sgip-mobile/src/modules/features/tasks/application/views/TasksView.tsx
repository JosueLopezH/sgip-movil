import { BaseView } from "@/shared/ui/BaseView";
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAsync } from '@/shared/hooks/useAsync';
import { Colors } from '@/shared/theme/colors';
import { formatDate } from '@/shared/utils/format';
import { Card } from '@/shared/ui/Card';
import { ScreenState } from '@/shared/ui/ScreenState';
import type { Task } from '../../domain/entities/Task';
import {
  getTasksUseCase,
  toggleTaskCompletionUseCase,
} from '../../infrastructure/tasksContainer';

const loadTasks = () => getTasksUseCase.execute();

export function TasksView() {
  const { data, isLoading, error, reload } = useAsync(loadTasks);

  const handleToggle = async (task: Task) => {
    try {
      await toggleTaskCompletionUseCase.execute(task.id, !task.completed);
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
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={data}
      keyExtractor={(task) => task.id}
      refreshing={isLoading}
      onRefresh={reload}
      ListEmptyComponent={<Text style={styles.empty}>No hay tareas registradas</Text>}
      renderItem={({ item }) => (
        <Card>
          <View style={styles.row}>
            <Pressable onPress={() => handleToggle(item)} hitSlop={10}>
              <Ionicons
                name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
                size={28}
                color={item.completed ? Colors.success : Colors.textSecondary}
              />
            </Pressable>
            <Link href={{ pathname: '/tasks/[id]', params: { id: item.id } }} asChild>
              <Pressable style={styles.info}>
                <Text style={[styles.name, item.completed && styles.done]}>{item.name}</Text>
                <Text style={styles.meta}>Proyecto: {item.project.name}</Text>
                <Text style={styles.meta}>Vence: {formatDate(item.dueDate)}</Text>
              </Pressable>
            </Link>
          </View>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 120,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  done: {
    textDecorationLine: 'line-through',
    color: Colors.textSecondary,
  },
  meta: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  empty: {
    marginTop: 40,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
});