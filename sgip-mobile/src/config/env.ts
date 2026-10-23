export const Env = {
  apiUrl:
    process.env.EXPO_PUBLIC_API_URL ??
    'https://sgip-backend-production.up.railway.app/api',
} as const;