import { stackScreenOptions } from '@/core/theme/stackOptions';
import { Stack } from 'expo-router';

export default function BudgetsLayout() {
  return (
    <Stack screenOptions={stackScreenOptions}>
      <Stack.Screen name="index" options={{ title: 'Presupuestos' }} />
      <Stack.Screen name="new" options={{ title: 'Registrar gasto' }} />
    </Stack>
  );
}