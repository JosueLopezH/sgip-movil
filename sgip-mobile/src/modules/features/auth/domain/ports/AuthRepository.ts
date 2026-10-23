import type { User } from '../entities/User';

export interface AuthRepository {
    login(username: string, password: string): Promise<string>;
    getProfile(): Promise<User>;
}
