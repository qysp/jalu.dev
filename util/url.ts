export const BASE_URL = 'https://jalu.dev';

export const url = (...parts: string[]) => BASE_URL.concat(parts.join('/'));
