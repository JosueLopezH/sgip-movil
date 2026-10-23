import Constants from 'expo-constants';
import { Platform } from 'react-native';

const API_PORT = 3000;
const API_PREFIX = '/api';

function resolveHost(): string {
    const hostUri = Constants.expoConfig?.hostUri;
    if (hostUri) {
        return hostUri.split(':')[0];
    }
    return Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
}

function resolveApiUrl(): string {
    const configured = process.env.EXPO_PUBLIC_API_URL;
    if (configured) {
        return configured;
    }
    return `http://${resolveHost()}:${API_PORT}${API_PREFIX}`;
}

export const Env = {
    apiUrl: resolveApiUrl(),
} as const;
