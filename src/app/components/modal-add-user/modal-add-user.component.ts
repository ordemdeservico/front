import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.scss'],
})
export class ModalAddUserComponent implements OnInit {

  outsourcedStatus: boolean = false;
  formGroup: FormGroup;
  categorys: FormControl;
  outsourcedForm: FormControl;
  categoryList: string[] = ['Civil', 'Hidraulico', 'Eletrico', 'Pintura', 'Mecanica', 'Mobiliaria', 'Ar-Condicionado', 'Eletronica', 'Outros'];
  outsourcedList: string[] = ['Sim', 'Não'];

  constructor(
    public dialogRef: MatDialogRef<ModalAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      empresa: ['', this.requiredIf(() => this.outsourcedStatus)]
    });

    this.categorys = new FormControl('', Validators.required);
    this.outsourcedForm = new FormControl('', Validators.required); // Adicionado Validators.required

    this.outsourcedForm.valueChanges.subscribe((selectedValue: string | null) => {
      if (selectedValue === 'Sim') {
        this.outsourcedStatus = true;
        this.formGroup.get('empresa')?.setValidators([Validators.required]);
      } else {
        this.outsourcedStatus = false;
        this.formGroup.get('empresa')?.clearValidators();
      }

      this.formGroup.get('empresa')?.updateValueAndValidity();
    });
  }

  checkFormValidity(): boolean {
    const categorySelected = !!this.categorys.value;
    const outsourcedSelected = !!this.outsourcedForm.value || this.outsourcedForm.value === '';
  
    if (outsourcedSelected) {
      if (categorySelected && this.formGroup.valid) {
        console.log('Fechar menu');
        return true;
      }
    } else {
      if (categorySelected && !this.outsourcedStatus) {
        console.log('Fechar menu');
        return true;
      }
    }
  
    this.formGroup.markAllAsTouched();
    return false;
  }

  submitForm() {
    if (!this.outsourcedForm.valid) {
      console.log("Não fechar o modal");
      return;
    }
  
    if (this.checkFormValidity()) {
      this.dialogRef.close(true);
      console.log("Modal fechado");
    } else {
      console.log("Não fechar o modal");
    }
  }

  ngOnInit() {
  }

  // Custom Validator: requiredIf
  requiredIf(condition: () => boolean) {
    return (control: FormControl) => {
      if (condition()) {
        return Validators.required(control);
      }
      return null;
    };
  }
}
