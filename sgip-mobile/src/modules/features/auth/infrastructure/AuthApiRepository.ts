import { apiClient } from '@/shared/http/apiClient';
import type { User } from '../domain/entities/User';
import type { AuthRepository } from '../domain/ports/AuthRepository';

interface LoginResponse {
    access_token: string;
}

export class AuthApiRepository implements AuthRepository {
    async login(username: string, password: string): Promise<string> {
        const response = await apiClient.post<LoginResponse>('/auth/login', {
            username,
            password,
        });
        return response.access_token;
    }

    getProfile(): Promise<User> {
        return apiClient.get<User>('/users/me');
    }
}
