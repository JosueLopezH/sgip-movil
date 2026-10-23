import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
} from 'react';
import type { User } from '../domain/entities/User';
import {
    loginUseCase,
    logoutUseCase,
    restoreSessionUseCase,
} from '../infrastructure/authContainer';

interface AuthContextValue {
    user: User | null;
    isLoading: boolean;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const restore = async () => {
            const restored = await restoreSessionUseCase.execute();
            setUser(restored);
            setIsLoading(false);
        };
        void restore();
    }, []);

    const value = useMemo<AuthContextValue>(
        () => ({
            user,
            isLoading,
            signIn: async (username, password) => {
                setUser(await loginUseCase.execute(username, password));
            },
            signOut: async () => {
                await logoutUseCase.execute();
                setUser(null);
            },
        }),
        [user, isLoading],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
}
