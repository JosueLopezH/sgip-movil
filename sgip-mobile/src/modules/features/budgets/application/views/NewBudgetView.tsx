import { BaseView } from '@/core/ui/BaseView';

export function NewBudgetView() {
    return (
        <BaseView
            title="Registrar gasto"
            description="Formulario para capturar concepto, monto, fecha y notas de un gasto."
            actions={[{ label: 'Volver a presupuestos', href: '/budgets' }]}
        />
    );
}