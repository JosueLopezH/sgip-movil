import { stackScreenOptions } from '@/core/theme/stackOptions';
import { Stack } from 'expo-router';

export default function TasksLayout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: 'Tareas' }} />
      <Stack.Screen name="[id]" options={{ title: 'Detalle de la tarea' }} />
    </Stack>
  );
}