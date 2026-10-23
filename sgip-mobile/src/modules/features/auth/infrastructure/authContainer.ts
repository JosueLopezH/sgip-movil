import { tokenStorage } from '@/shared/storage/TokenStorage';
import { LoginUseCase } from '../application/use-cases/LoginUseCase';
import { LogoutUseCase } from '../application/use-cases/LogoutUseCase';
import { RestoreSessionUseCase } from '../application/use-cases/RestoreSessionUseCase';
import { AuthApiRepository } from './AuthApiRepository';

const authRepository = new AuthApiRepository();

export const loginUseCase = new LoginUseCase(authRepository, tokenStorage);
export const restoreSessionUseCase = new RestoreSessionUseCase(authRepository, tokenStorage);
export const logoutUseCase = new LogoutUseCase(tokenStorage);
