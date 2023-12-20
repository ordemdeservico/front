export interface LoginResponse {
    token: string;
    id_usuario: string;
    message: string;
    email: string;
    nome: string;
    cargo: string;
}

export interface UserInfo {
    nome: string;
    email: string;
    cargo: string;
    id_usuario: number;
}


export interface Login {
  email: string;
  senha: string;
}
