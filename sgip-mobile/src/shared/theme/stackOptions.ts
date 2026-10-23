import { Colors } from './colors';

export const stackScreenOptions = {
    headerStyle: { backgroundColor: Colors.surface },
    headerTintColor: Colors.textPrimary,
    headerTitleStyle: { fontWeight: '700' },
    headerShadowVisible: false,
    contentStyle: { backgroundColor: Colors.background },
} as const;