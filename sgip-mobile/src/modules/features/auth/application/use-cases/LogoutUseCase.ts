import type { SessionStorage } from '../../domain/ports/SessionStorage';

export class LogoutUseCase {
    constructor(private readonly sessionStorage: SessionStorage) { }

    execute(): Promise<void> {
        return this.sessionStorage.clearToken();
    }
}
