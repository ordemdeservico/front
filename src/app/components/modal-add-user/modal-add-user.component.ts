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
  
  constructor(
    public dialogRef: MatDialogRef<ModalAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder

    ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  checkFormValidity(): boolean {
    if (this.formGroup.valid) {
      return true;
    } else {
      this.formGroup.markAllAsTouched();
      return false;
    }
  }
  
  
  
  
  
  
  
  
  

  submitForm() {
    if (this.checkFormValidity()) {
      this.dialogRef.close(true);
      console.log("Modal fechado");
    } else {
      console.log("Não fechar o modal");
    }
  }

  ngOnInit() {
    this.outsourcedForm.valueChanges.subscribe((selectedValue: string | null) => {
      if (selectedValue === 'Sim') {
        this.outsourcedStatus = true;
        
      } else {
        this.outsourcedStatus = false;
        
      }
    });
  }

  outsourcedForm = new FormControl('');

  categorys = new FormControl('');

  categoryList: string[] = ['Civil', 'Hidraulico', 'Eletrico', 'Pintura', 'Mecanica', 'Mobiliaria', 'Ar-Condicionado', 'Eletronica', 'Outros']; 

  outsourcedList: string[] = ['Sim', 'Não']; 
}
