import { BaseView } from "@/shared/ui/BaseView";

export function ProjectsView() {
    return (
        <BaseView
            title="Proyectos"
            description="Listado de proyectos con su estado, responsable y presupuesto."
            actions={[
                { label: 'Ver detalle de ejemplo', href: '/projects/1' },
                { label: 'Nuevo proyecto', href: '/projects/new' },
            ]}
        />
    );
}