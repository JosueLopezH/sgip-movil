import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'sgip_access_token';

export class SecureTokenStorage {
    getToken(): Promise<string | null> {
        return SecureStore.getItemAsync(TOKEN_KEY);
    }

    saveToken(token: string): Promise<void> {
        return SecureStore.setItemAsync(TOKEN_KEY, token);
    }

    clearToken(): Promise<void> {
        return SecureStore.deleteItemAsync(TOKEN_KEY);
    }
}

export const tokenStorage = new SecureTokenStorage();
