import { BaseView } from "@/shared/ui/BaseView";
import { useAsync } from '@/shared/hooks/useAsync';
import { Colors } from '@/shared/theme/colors';
import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { ScreenState } from '@/shared/ui/ScreenState';
import { formatCurrency } from '@/shared/utils/format';
import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getProjectsUseCase } from '../../infrastructure/projectsContainer';
import { projectStatusColor, projectStatusLabel } from '../projectStatus';

const loadProjects = () => getProjectsUseCase.execute();

export function ProjectsView() {
  const { data, isLoading, error, reload } = useAsync(loadProjects);

  if (!data) {
    return <ScreenState isLoading={isLoading} error={error} onRetry={reload} />;
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={data}
      keyExtractor={(project) => project.id}
      refreshing={isLoading}
      onRefresh={reload}
      ListEmptyComponent={<Text style={styles.empty}>No hay proyectos registrados</Text>}
      renderItem={({ item }) => (
        <Link href={{ pathname: '/projects/[id]', params: { id: item.id } }} asChild>
          <Pressable>
            <Card>
              <View style={styles.header}>
                <Text style={styles.name}>{item.name}</Text>
                <Badge
                  label={projectStatusLabel[item.status]}
                  color={projectStatusColor[item.status]}
                />
              </View>
              <Text style={styles.meta}>Responsable: {item.manager.name}</Text>
              <Text style={styles.meta}>Presupuesto: {formatCurrency(item.budget)}</Text>
              <Text style={styles.meta}>{item.tasks.length} tareas</Text>
            </Card>
          </Pressable>
        </Link>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  name: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  meta: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  empty: {
    marginTop: 40,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
});