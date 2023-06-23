import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SetorPrincipal } from 'src/app/shared/models/setor_principal.model';
import { SetorSecundario } from 'src/app/shared/models/setor_secundario.model';
import { TipoServico } from 'src/app/shared/models/tipo_servico.model';
import { HomeFormService } from './home-form.service';



@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit{
  instituicoes: SetorPrincipal[] = [];
  setores: SetorSecundario[] = [];
  categorias: TipoServico[] = [];

  constructor (
    private FormService: HomeFormService
  ){
  }

  ngOnInit(): void {
    this.carregarDadosDoBanco();
  }
  
  carregarDadosDoBanco(): void {
    this.FormService.setorPrincipalGetAll().subscribe(instituicoes => this.instituicoes = instituicoes);
    this.FormService.setorSecundarioGetBySetorPrincipal().subscribe(setores => this.setores = setores);
    this.FormService.tipoServicoGetAll().subscribe(categorias => this.categorias = categorias);
  }


}






