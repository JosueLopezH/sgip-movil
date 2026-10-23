import { useAuth } from '@/modules/features/auth/application/AuthContext';
import { Colors } from '@/shared/theme/colors';
import { BaseView } from '@/shared/ui/BaseView';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

export function HomeView() {
    const router = useRouter();
    const { user, signOut } = useAuth();

    const handleSignOut = async () => {
        await signOut();
        router.replace('/login');
    };

    return (
        <BaseView
            title={`Hola, ${user?.name ?? 'usuario'}`}
            description="Consulta tus proyectos y tareas conectados con el servicio del SGIP."
            actions={[
                { label: 'Ir a proyectos', href: '/projects' },
                { label: 'Ir a tareas', href: '/tasks' },
                { label: 'Ir a presupuestos', href: '/budgets' },
                { label: 'Ver notificaciones', href: '/notifications' },
            ]}
        >
            <Pressable style={styles.logout} onPress={handleSignOut}>
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </Pressable>
        </BaseView>
    );
}

const styles = StyleSheet.create({
    logout: {
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors.danger,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.danger,
    },
});
