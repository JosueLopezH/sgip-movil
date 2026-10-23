import { BaseView } from "@/shared/ui/BaseView";
interface ProjectDetailViewProps {
    id: string;
}

export function ProjectDetailView({ id }: ProjectDetailViewProps) {
    return (
        <BaseView
            title={`Proyecto ${id}`}
            description="Detalle del proyecto con sus tareas, gerente y avance."
            actions={[{ label: 'Ver tareas', href: '/tasks' }]}
        />
    );
}