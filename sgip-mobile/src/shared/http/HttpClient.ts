import { ApiError } from './ApiError';

export interface TokenProvider {
    getToken(): Promise<string | null>;
}

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface ErrorBody {
    message?: string | string[];
}

function extractMessage(payload: unknown): string {
    if (typeof payload === 'object' && payload !== null && 'message' in payload) {
        const message = (payload as ErrorBody).message;
        if (Array.isArray(message)) {
            return message.join('\n');
        }
        if (typeof message === 'string') {
            return message;
        }
    }
    return 'Ocurrió un error inesperado';
}

function parseBody(text: string): unknown {
    if (!text) {
        return null;
    }
    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

export class HttpClient {
    constructor(
        private readonly baseUrl: string,
        private readonly tokenProvider: TokenProvider,
    ) { }

    get<T>(path: string): Promise<T> {
        return this.request<T>('GET', path);
    }

    post<T>(path: string, body: unknown): Promise<T> {
        return this.request<T>('POST', path, body);
    }

    patch<T>(path: string, body: unknown): Promise<T> {
        return this.request<T>('PATCH', path, body);
    }

    private async request<T>(
        method: HttpMethod,
        path: string,
        body?: unknown,
    ): Promise<T> {
        const token = await this.tokenProvider.getToken();
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        let response: Response;
        try {
            response = await fetch(`${this.baseUrl}${path}`, {
                method,
                headers,
                body: body === undefined ? undefined : JSON.stringify(body),
            });
        } catch {
            throw new ApiError(0, 'No hay conexión con el servidor');
        }

        const payload = parseBody(await response.text());
        if (!response.ok) {
            throw new ApiError(response.status, extractMessage(payload));
        }
        return payload as T;
    }
}
