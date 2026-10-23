import { BaseView } from '@/core/ui/BaseView';

export function NotificationsView() {
    return (
        <BaseView
            title="Notificaciones"
            description="Alertas internas del sistema con opción de marcarlas como leídas."
            actions={[{ label: 'Volver al inicio', href: '/home' }]}
        />
    );
}