export interface HomeLogin {
    email?: string;
    senha?: string;
}

export interface LoginResponse {
    token?: string;
    id_usuario?: string;
    message: string;
    email: string;
    nome: string;
    cargo?: string;
}