import { TaskDetailView } from '@/modules/features/tasks/application/views/TaskDetailView';
import { useLocalSearchParams } from 'expo-router';

export default function TaskDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return <TaskDetailView id={id} />;
}