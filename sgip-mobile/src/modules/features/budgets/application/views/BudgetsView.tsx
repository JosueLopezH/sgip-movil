import { BaseView } from '@/core/ui/BaseView';

export function BudgetsView() {
    return (
        <BaseView
            title="Presupuestos"
            description="Resumen de gastos por proyecto con presupuesto disponible y porcentaje utilizado."
            actions={[{ label: 'Registrar gasto', href: '/budgets/new' }]}
        />
    );
}