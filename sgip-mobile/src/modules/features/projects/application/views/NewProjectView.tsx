import { BaseView } from "@/shared/ui/BaseView";


export function NewProjectView() {
    return (
        <BaseView
            title="Nuevo proyecto"
            description="Formulario para crear un proyecto con nombre, descripción, fechas y presupuesto."
            actions={[{ label: 'Volver al listado', href: '/projects' }]}
        />
    );
}