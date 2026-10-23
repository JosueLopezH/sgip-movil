import { Colors } from '@/core/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface ViewAction {
  label: string;
  href: Href;
}

interface BaseViewProps {
  title: string;
  description: string;
  actions?: ViewAction[];
}

export function BaseView({ title, description, actions = [] }: BaseViewProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {actions.map((action) => (
        <Link key={action.label} href={action.href} asChild>
          <Pressable style={styles.row}>
            <Text style={styles.rowText}>{action.label}</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 120,
    gap: 12,
    backgroundColor: Colors.background,
  },
  card: {
    padding: 20,
    gap: 8,
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    backgroundColor: Colors.surface,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  rowText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
});