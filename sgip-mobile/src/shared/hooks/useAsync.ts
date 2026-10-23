import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

interface AsyncState<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    reload: () => Promise<void>;
}

export function useAsync<T>(loader: () => Promise<T>): AsyncState<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const reload = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            setData(await loader());
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Ocurrió un error inesperado');
        } finally {
            setIsLoading(false);
        }
    }, [loader]);

    useFocusEffect(
        useCallback(() => {
            void reload();
        }, [reload]),
    );

    return { data, isLoading, error, reload };
}
