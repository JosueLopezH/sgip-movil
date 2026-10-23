import { BaseView } from "@/shared/ui/BaseView";


export function HomeView() {
    return (
        <BaseView
            title="Inicio"
            description="Resumen general del sistema con indicadores de proyectos, tareas y presupuesto."
            actions={[
                { label: 'Ir a proyectos', href: '/projects' },
                { label: 'Ir a tareas', href: '/tasks' },
                { label: 'Ir a presupuestos', href: '/budgets' },
                { label: 'Ver notificaciones', href: '/notifications' },
            ]}
        />
    );
}