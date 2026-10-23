export function formatCurrency(value: string | number | null): string {
    if (value === null) {
        return 'Sin definir';
    }
    return Number(value).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });
}

export function formatDate(value: string | null): string {
    if (value === null) {
        return 'Sin fecha';
    }
    return new Date(value).toLocaleDateString('es-MX', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}
