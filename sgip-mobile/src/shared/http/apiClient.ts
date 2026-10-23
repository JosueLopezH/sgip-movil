import { Env } from '@/config/env';
import { tokenStorage } from '@/shared/storage/TokenStorage';
import { HttpClient } from './HttpClient';

export const apiClient = new HttpClient(Env.apiUrl, tokenStorage);