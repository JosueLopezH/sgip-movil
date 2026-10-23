import type { User } from '../../domain/entities/User';
import type { AuthRepository } from '../../domain/ports/AuthRepository';
import type { SessionStorage } from '../../domain/ports/SessionStorage';

export class LoginUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly sessionStorage: SessionStorage,
    ) { }

    async execute(username: string, password: string): Promise<User> {
        const token = await this.authRepository.login(username, password);
        await this.sessionStorage.saveToken(token);
        try {
            return await this.authRepository.getProfile();
        } catch (error) {
            await this.sessionStorage.clearToken();
            throw error;
        }
    }
}
