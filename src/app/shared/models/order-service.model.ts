export interface OrderService {
  id: number
  solicitante_id: number
  data_solicitacao: string
  descricao: string
  setor_principal_id: number
  setor_secundario_id: number
  status_os: string
  nivel_prioridade?: string
  servico_terceirizado?: number
  tipo_servico_id?: number
  tecnico_id?: number
  data_inicial?: string
  hora_inicial?: string
  data_final?: string
  hora_final?: string
  material?: string
  relatorio?: string
  feedback?: string
  setor_principal_nome?: string
  setor_secundario_com_bloco?: string
  setor_secundario_bloco?: any
  tipo_servico_nome?: string
  solicitante_nome?: string
  solicitante_email?: string
  tecnico_nome?: string
}


export interface AprovarOS {
  ordem_servico_id: number
  nivel_prioridade: string
  servico_terceirizado: number
  tipo_servico_id: number
  tecnico_id: number
}