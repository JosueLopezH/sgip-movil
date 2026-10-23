import { Colors } from '@/shared/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

const headerOptions = {
  headerStyle: { backgroundColor: Colors.surface },
  headerTintColor: Colors.textPrimary,
  headerTitleStyle: { fontWeight: '700' },
  headerShadowVisible: false,
} as const;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        ...headerOptions,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Proyectos',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tareas',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="budgets"
        options={{
          title: 'Gastos',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Alertas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    height: 68,
    paddingTop: 8,
    borderTopWidth: 0,
    borderRadius: 24,
    elevation: 8,
    backgroundColor: Colors.surface,
  },
  tabItem: {
    paddingBottom: 6,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});