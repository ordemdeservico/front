export interface ListAdm {
    id: number;
    nome: string;
    email: string;
    senha: string;
    terceirizado: boolean;
    empresa?: string;
    cargo: string;
    tipo_servico_id?: string;
    data_insercao: string;
}