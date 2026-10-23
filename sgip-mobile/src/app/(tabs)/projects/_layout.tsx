import { stackScreenOptions } from '@/core/theme/stackOptions';
import { Stack } from 'expo-router';

export default function ProjectsLayout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: 'Proyectos' }} />
      <Stack.Screen name="[id]" options={{ title: 'Detalle del proyecto' }} />
      <Stack.Screen name="new" options={{ title: 'Nuevo proyecto' }} />
    </Stack>
  );
}