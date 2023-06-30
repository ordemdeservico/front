import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { lastValueFrom, map } from 'rxjs';
import { ListAdmService } from 'src/app/pages/list-adm/list-adm.service';
import { ListAdmComponent } from 'src/app/pages/list-adm/list-adm.component';
import { MessageService, ConfirmationService } from 'primeng/api';

interface DropdownOptions {
  label: string;
  value: number;
}

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.scss'],
  providers: [ MessageService, ConfirmationService ]
})
export class ModalEditUserComponent implements OnInit {

  @Input() userInfo: any;
  @Output() displayModalEvent = new EventEmitter();

  categories: {id: any, nome: string}[] = []
   
  outsourced: string[] = [
    'Sim',
    'Não'
  ];

  infos: {
    nome: string, 
    email: string, 
    cargo?: string, 
    categoria: string, 
    terceirizado: string, 
    empresa: string 
  } [] = []

  roles =  [
    { label: 'Administrador', value: 'Admin' },
    { label: 'Técnico', value: 'Tecnico' },
    { label: 'Solicitante', value: 'Solicitante' },
    { label: 'Bloqueado', value: 'Bloqueado' }
  ];


  formGroup: FormGroup;
  showEmpresaInput = false;

  constructor(
    private formBuilder: FormBuilder,
    private listAdmService: ListAdmService,
    private ListAdmComponent: ListAdmComponent,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      cargo: ['', Validators.required],
      categoria: [''],
      terceirizado: [''],
      empresa: ['', this.showEmpresaInput ? Validators.required : null],
    });
   }

   deleteUserById(nome: string) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este usuário?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.listAdmService.deleteUserByName(nome).subscribe(
          (res) => {
            this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Usuário excluido.', life: 3000 });
            this.ListAdmComponent.loadUserList();
            this.displayModalEvent.emit(false);
          },
          (err) => {
            console.error(err)
            this.messageService.add({ severity: 'error', summary: 'Erro!', detail: err.error.message, life: 3000  });
            
          }
        ) 
      },
      acceptButtonStyleClass: 'custom-accept-button',
      rejectButtonStyleClass: 'custom-reject-button'
    });
    
  }

  submitForm() {
    const formValues = this.formGroup.value;
    formValues.tipo_servico_id = formValues.categoria;
    delete formValues.categoria;
    if (formValues.cargo != 'Solicitante') {
      this.formGroup.get('cargo')?.setValidators([Validators.required]);
      this.formGroup.get('terceirizado')?.setValidators([Validators.required]);
     }
    
    if (!this.arePropertiesEqual(formValues, this.userInfo)) {
      const value: any = { ...formValues };
      
      this.listAdmService.updateUser(value, this.userInfo.id).subscribe({
        next: (res) => {
          console.log(res);
          this.ListAdmComponent.loadUserList();
          this.displayModalEvent.emit(false);
          
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
  
  arePropertiesEqual(obj1: any, obj2: any): boolean {
    const commonProperties = Object.keys(obj1).filter(prop => obj2.hasOwnProperty(prop));
  
    for (const prop of commonProperties) {
      if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
  
    return true;
  }

  mapValuesRoles(label: string) {
    return this.roles.find( (r) => r.label === label )?.value;
  }

  mapValuesCategories(nome: string) {
    console.log('categories: ', this.categories)
    return this.categories.find( (c) => c.nome === nome )?.id;
  }



  async ngOnInit() {
    await this.getAllCategories();
    this.formGroup.get('terceirizado')?.valueChanges.subscribe((value) => {
      this.showEmpresaInput = value === 'Sim';
    
      if (this.showEmpresaInput) {
        this.formGroup.get('empresa')?.setValidators([Validators.required]);
      } else {
        this.formGroup.get('empresa')?.clearValidators();
      }
    
      this.formGroup.get('empresa')?.updateValueAndValidity();
    });

    this.infos = [{
      nome: this.userInfo.nome,
      email: this.userInfo.email,
      cargo: this.mapValuesRoles(this.userInfo.cargo),
      categoria: this.mapValuesCategories(this.userInfo.tipo_servico_nome),
      terceirizado: this.userInfo.terceirizado,
      empresa: this.userInfo.empresa
    }]

    this.formGroup.patchValue(this.infos[0])

  }

  async getAllCategories() {
    try {
      const response = await lastValueFrom(this.listAdmService.getAllCategories());
      if (response.result && Array.isArray(response.result)) {
        this.categories = response.result;
      } else {
        console.error('Estrutura de resposta inválida:', response);
      }
    } catch (error) {
      console.error(error);
    }
  }
  

}
