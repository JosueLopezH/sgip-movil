import { Colors } from '@/shared/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { useAuth } from '../AuthContext';

export function LoginView() {
    const router = useRouter();
    const { signIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const canSubmit = username.trim().length > 0 && password.length > 0 && !isSubmitting;

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError(null);
        try {
            await signIn(username.trim(), password);
            router.replace('/home');
        } catch (e) {
            setError(e instanceof Error ? e.message : 'No fue posible iniciar sesión');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Iniciar sesión</Text>
                <Text style={styles.subtitle}>Accede con tu cuenta del SGIP</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor={Colors.textSecondary}
                    autoCapitalize="none"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor={Colors.textSecondary}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <Pressable
                    style={[styles.button, !canSubmit && styles.buttonDisabled]}
                    disabled={!canSubmit}
                    onPress={handleSubmit}
                >
                    {isSubmitting ? (
                        <ActivityIndicator color={Colors.onPrimary} />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: Colors.background,
    },
    card: {
        gap: 14,
        padding: 24,
        borderRadius: 20,
        backgroundColor: Colors.surface,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: Colors.textPrimary,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    input: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        color: Colors.textPrimary,
        backgroundColor: Colors.background,
    },
    error: {
        fontSize: 14,
        color: Colors.danger,
    },
    button: {
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: Colors.primary,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.onPrimary,
    },
});