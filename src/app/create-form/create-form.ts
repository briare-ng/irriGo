import { N } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { combineLatest, debounce, debounceTime, filter, tap } from 'rxjs';
import { CreateForm2 } from '../create-form2/create-form2';

@Component({
  selector: 'app-create-form',
  imports: [FormsModule, ReactiveFormsModule, CreateForm2],
  templateUrl: './create-form.html',
  styleUrl: './create-form.scss',
})
export class CreateForm implements OnInit {
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

  ngOnInit() {
    //Ecouter champs de l'adresse
    /*combineLatest([
      this.createPlanForm.controls.adresse.valueChanges,
      this.createPlanForm.controls.ville.valueChanges,
      this.createPlanForm.controls.codePostale.valueChanges,
    ])
      .pipe(
        debounceTime(1000),
        filter(
          ([adresse, ville, codePostale]) =>
            !!adresse && !!ville && !!codePostale
        ),
        tap(([adresse, ville, codePostale]) => {
          //  appeler la requête
          console.log('Appel API pour :', adresse, ville, codePostale);
        })
      )
      .subscribe();*/
  }

  onSubmit() {
    console.log('Sumbitted');
    this.showFormPart2 = true;

    //afficher les infos a confirmer 2eme partie du
  }
}
