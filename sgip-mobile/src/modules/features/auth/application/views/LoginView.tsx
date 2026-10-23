import { BaseView } from '@/core/ui/BaseView';

export function LoginView() {
    return (
        <BaseView
            title="Iniciar sesión"
            description="Aquí irá el formulario de usuario y contraseña que se conectará con el backend del SGIP."
            actions={[{ label: 'Entrar', href: '/home' }]}
        />
    );
}