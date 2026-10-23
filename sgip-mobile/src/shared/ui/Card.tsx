import { Colors } from '@/shared/theme/colors';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export function Card({ children }: PropsWithChildren) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        gap: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.surface,
    },
});
