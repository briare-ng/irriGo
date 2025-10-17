import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateForm2 } from '../create-form2/create-form2';

@Component({
  selector: 'app-create-form',
  imports: [FormsModule, ReactiveFormsModule, CreateForm2],
  templateUrl: './create-form.html',
  styleUrl: './create-form.scss',
})
export class CreateForm {
  showFormPart2 = false;

  createPlanForm = new FormGroup({
    surface: new FormControl('', [Validators.required]),
    water: new FormControl('', Validators.required),
    plant: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    isInGreenHouse: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    codePostale: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  onSubmit() {
    console.log('Sumbitted');
    this.showFormPart2 = true;

    //afficher les infos a confirmer 2eme partie du
  }
}
