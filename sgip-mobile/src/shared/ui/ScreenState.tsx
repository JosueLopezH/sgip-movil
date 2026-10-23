import { Colors } from '@/shared/theme/colors';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

interface ScreenStateProps {
    isLoading: boolean;
    error: string | null;
    onRetry: () => void;
}

export function ScreenState({ isLoading, error, onRetry }: ScreenStateProps) {
    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{error ?? 'No hay información disponible'}</Text>
            <Pressable style={styles.button} onPress={onRetry}>
                <Text style={styles.buttonText}>Reintentar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: 24,
        backgroundColor: Colors.background,
    },
    message: {
        fontSize: 15,
        textAlign: 'center',
        color: Colors.textSecondary,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        backgroundColor: Colors.primary,
    },
    buttonText: {
        fontWeight: '700',
        color: Colors.onPrimary,
    },
});
