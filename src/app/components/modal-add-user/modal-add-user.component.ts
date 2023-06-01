import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ModalAddUserService } from './modal-add-user.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.scss'],
})
export class ModalAddUserComponent implements OnInit {

  submitted = false;
  categorys: string[] = [];
  outsourced: string[] = [];
  office: string[] = [];
  formGroup: FormGroup;
  showEmpresaInput = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ModalAddUserService,
    private ref: DynamicDialogRef
  ) {

    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      cargo: ['', Validators.required],
      categoria: ['', Validators.required],
      terceirizado: ['', Validators.required],
      empresa: ['', this.showEmpresaInput ? Validators.required : null]
    });
 
  }

  closeModal(): void {
    this.ref.close();
  }

  submitForm() {
    this.submitted = true;
    const formValues = this.formGroup.value;
    if (this.formGroup.valid) {
      if (formValues.terceirizado == 'Sim') {
        formValues.terceirizado = 1;
      } else if (formValues.terceirizado == 'Não') {
        formValues.terceirizado = 0;
      }
      console.log(formValues.empresa)
      this.service.addUser(formValues).subscribe(
        response => {
          console.log("Dados enviados com sucesso!");
          this.closeModal();
        },
        error => {
          console.error("Erro ao enviar os dados:", error);
        }
      );
    } else {
      console.log('Não Fechar Menu');
      this.formGroup.markAllAsTouched();
    }
  }

  ngOnInit() {
    this.formGroup.get('terceirizado')?.valueChanges.subscribe((value) => {
      this.showEmpresaInput = value === 'Sim';
    
      if (this.showEmpresaInput) {
        this.formGroup.get('empresa')?.setValidators([Validators.required]);
      } else {
        this.formGroup.get('empresa')?.clearValidators();
      }
    
      this.formGroup.get('empresa')?.updateValueAndValidity();
    });

    this.office = [
      'Solicitante',
      'Tecnico',
      'Admin'
    ]

    this.outsourced = [
      'Sim',
      'Não'
    ]

    this.categorys = [
      'Civil',
      'Hidráulica', 
      'Elétrica', 
      'Pintura', 
      'Mecânica', 
      'Mobiliário', 
      'Ar-Condicionado', 
      'Eletrônicos', 
      'Outros'
    ]; 
  }

}




























  // outsourcedStatus: boolean = false;
  // formGroup: FormGroup;
  // categorys: FormControl;
  // outsourcedForm: FormControl;
  // categoryList: string[] = ['Civil', 'Hidraulico', 'Eletrico', 'Pintura', 'Mecanica', 'Mobiliaria', 'Ar-Condicionado', 'Eletronica', 'Outros'];
  // outsourcedList: string[] = ['Sim', 'Não'];

  // constructor(
  //   public dialogRef: MatDialogRef<ModalAddUserComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any,
  //   private formBuilder: FormBuilder,
  //   private service: ModalAddUserService,
  //   private router: Router
  // ) {
  //   this.formGroup = this.formBuilder.group({
  //     nome: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     senha: ['', Validators.required],
  //     empresa: ['', this.requiredIf(() => this.outsourcedStatus)]
  //   });

  //   this.categorys = new FormControl('', Validators.required);
  //   this.outsourcedForm = new FormControl('', Validators.required);

  //   this.outsourcedForm.valueChanges.subscribe((selectedValue: string | null) => {
  //     if (selectedValue === 'Sim') {
  //       this.outsourcedStatus = true;
  //       this.formGroup.get('empresa')?.setValidators([Validators.required]);
  //     } else {
  //       this.outsourcedStatus = false;
  //       this.formGroup.get('empresa')?.clearValidators();
  //     }

  //     this.formGroup.get('empresa')?.updateValueAndValidity();
  //   });
  // }

  // checkFormValidity(): boolean {
  //   const categorySelected = !!this.categorys.value;
  //   const outsourcedSelected = !!this.outsourcedForm.value || this.outsourcedForm.value === '';
  
  //   if (outsourcedSelected) {
  //     if (categorySelected && this.formGroup.valid) {
  //       console.log('Fechar menu');
  //       return true;
  //     }
  //   } else {
  //     if (categorySelected && !this.outsourcedStatus) {
  //       console.log('Fechar menu');
  //       return true;
  //     }
  //   }
  
  //   this.formGroup.markAllAsTouched();
  //   return false;
  // }

  // submitForm() {
  //   if (!this.outsourcedForm.valid) {
  //     console.log("Não fechar o modal");
  //     return;
  //   }
  
  //   if (this.checkFormValidity()) {
  //     const formValues = this.formGroup.value; // Obter os valores do formulário
  //   // // Enviar os valores para o backend (exemplo fictício)
  //     this.service.addUser(formValues).subscribe(
  //     response => {
  //       // Lógica após o sucesso do envio para o backend
  //       console.log("Dados enviados com sucesso!");
  //     },
  //     error => {
  //       // Lógica em caso de erro no envio para o backend
  //       console.error("Erro ao enviar os dados:", error);
  //     }
  //   );

  //     this.dialogRef.close(true);
  //     console.log("Modal fechado");
  //   } else {
  //     console.log("Não fechar o modal");
  //   }
  // }

  // ngOnInit() {
    
  // }

  // requiredIf(condition: () => boolean) {
  //   return (control: FormControl) => {
  //     if (condition()) {
  //       return Validators.required(control);
  //     }
  //     return null;
  //   };
  // }
