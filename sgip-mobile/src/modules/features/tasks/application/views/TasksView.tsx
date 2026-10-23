import { BaseView } from "@/shared/ui/BaseView";


export function TasksView() {
    return (
        <BaseView
            title="Tareas"
            description="Listado de tareas con filtro por proyecto y estado de completitud."
            actions={[{ label: 'Ver detalle de ejemplo', href: '/tasks/1' }]}
        />
    );
}