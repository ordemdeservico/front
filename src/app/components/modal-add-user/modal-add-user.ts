export interface ModalAddUser {
    nome?: string;
    email?: string;
    senha?: string;
    cargo?: string;
    terceirizado?: boolean;
    empresa?: string;
    tipo_servico_id?: string;
    data_insercao: string;
}