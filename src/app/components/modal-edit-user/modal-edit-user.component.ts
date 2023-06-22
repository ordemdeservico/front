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

  selectedCargo?: string;
  selectedCategory?: string;
  user: any;

  categorys: string[] = [
    'Civil',
    'Hidráulica',
    'Elétrica',
    'Pintura', 
    'Mecânica',
    'Mobiliário',
    'Ar-Condicionado',
    'Eletrônicos',
    'Outros',
  ];

  
  outsourced: string[] = [
    'Sim',
    'Não'
  ];
  office = [
    'Solicitante',
    'Técnico',
    'Administrador'
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
      categoria: ['', Validators.required],
      terceirizado: ['', Validators.required],
      empresa: ['', this.showEmpresaInput ? Validators.required : null],
    });
   }


   deleteUserById(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este usuário?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Usuário excluido.', life: 3000 });
        this.listAdmService.deleteUserById(id).subscribe(
          (res) => {
            console.log(res)
            this.ListAdmComponent.loadUserList();
            this.displayModalEvent.emit(false);
          },
          (err) => {
            console.error(err)
          }
        ) 
      },
      acceptButtonStyleClass: 'custom-accept-button',
      rejectButtonStyleClass: 'custom-reject-button'
    });
    
  }

  submitForm() {
    const formValues = this.formGroup.value;
    
    if (!this.arePropertiesEqual(formValues, this.userInfo)) {
      const value: any = { ...formValues };
      
      this.listAdmService.updateUser(value, this.userInfo.id).subscribe(
        (res) => {
          console.log(res);
          this.ListAdmComponent.loadUserList();
          this.displayModalEvent.emit(false);
          
        },
        (err) => {
          console.error(err);
        }
      );
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

  async ngOnInit() {
    this.formGroup.get('terceirizado')?.valueChanges.subscribe((value) => {
      this.showEmpresaInput = value === 'Sim';
    
      if (this.showEmpresaInput) {
        this.formGroup.get('empresa')?.setValidators([Validators.required]);
      } else {
        this.formGroup.get('empresa')?.clearValidators();
      }
    
      this.formGroup.get('empresa')?.updateValueAndValidity();
    });
    // this.getAllCategorys();
    this.formGroup.patchValue(this.userInfo)
    // this.userInfo = {...this.userInfo,  cargo: {value: "Tecnico"}}
    // console.log('teste', this.userInfo)
    this.selectedCargo = this.userInfo.cargo
    this.selectedCategory = this.userInfo.tipo_servico_nome
    
    console.log(this.selectedCategory)

    

  }

  // async getAllCategorys() {
  //   try {
  //     const response = await lastValueFrom(this.listAdmService.getAllCategories());
  //     if (response.result && Array.isArray(response.result)) {
  //       this.categorys = response.result.map((item: any) => ({
  //         label: item.nome,
  //         value: item.id
  //       }));
  //       console.log(this.categorys);
  //     } else {
  //       console.error('Estrutura de resposta inválida:', response);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  
  

}