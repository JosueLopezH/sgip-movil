import { ProjectDetailView } from '@/modules/features/projects/application/views/ProjectDetailView';
import { useLocalSearchParams } from 'expo-router';

export default function ProjectDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return <ProjectDetailView id={id} />;
}