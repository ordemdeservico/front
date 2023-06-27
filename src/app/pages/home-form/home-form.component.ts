import { SetorPrincipal } from './../../shared/models/setor_principal.model';
import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      setor_principal_id: [''],
      setor_segundario_id: ['', Validators.required],
    });
   }

  options = [
    'teste',
    'teste01',

  ]
  options02 = [
    'teste',
    'teste01',
    
  ]
  options03 = [
    'teste',
    'teste01',
    
  ]
}