export interface PageMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface Paginated<T> {
    data: T[];
    meta: PageMeta;
}
