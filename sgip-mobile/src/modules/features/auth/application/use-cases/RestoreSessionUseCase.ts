import type { User } from '../../domain/entities/User';
import type { AuthRepository } from '../../domain/ports/AuthRepository';
import type { SessionStorage } from '../../domain/ports/SessionStorage';

export class RestoreSessionUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly sessionStorage: SessionStorage,
    ) { }

    async execute(): Promise<User | null> {
        const token = await this.sessionStorage.getToken();
        if (!token) {
            return null;
        }
        try {
            return await this.authRepository.getProfile();
        } catch {
            await this.sessionStorage.clearToken();
            return null;
        }
    }
}
