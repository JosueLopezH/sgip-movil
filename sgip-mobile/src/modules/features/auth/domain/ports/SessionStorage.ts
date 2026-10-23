export interface SessionStorage {
    getToken(): Promise<string | null>;
    saveToken(token: string): Promise<void>;
    clearToken(): Promise<void>;
}
