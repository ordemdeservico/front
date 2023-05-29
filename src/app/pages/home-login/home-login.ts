export interface HomeLogin {
    email?: string;
    senha?: string;
}

export interface LoginResponse {
    token?: string;
    message: string;
    email?: string;
    cargo?: string;
}