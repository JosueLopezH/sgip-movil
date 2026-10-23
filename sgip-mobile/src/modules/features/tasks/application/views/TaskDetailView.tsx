import { BaseView } from "@/shared/ui/BaseView";

interface TaskDetailViewProps {
    id: string;
}

export function TaskDetailView({ id }: TaskDetailViewProps) {
    return (
        <BaseView
            title={`Tarea ${id}`}
            description="Detalle de la tarea con su responsable, fecha límite y proyecto asociado."
            actions={[{ label: 'Ir a proyectos', href: '/projects' }]}
        />
    );
}