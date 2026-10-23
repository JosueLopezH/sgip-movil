import { Colors } from '@/shared/theme/colors';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../AuthContext';

export function SplashView() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    router.replace(user ? '/home' : '/login');
  }, [isLoading, user, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SGIP</Text>
      <Text style={styles.subtitle}>Gestión Integral de Proyectos de TI</Text>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 44,
    fontWeight: '800',
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
  },
});
