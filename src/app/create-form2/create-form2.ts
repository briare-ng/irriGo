import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-form2',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-form2.html',
  styleUrl: './create-form2.scss',
})
export class CreateForm2 implements OnInit {
  createPlan2Form = new FormGroup({
    soil: new FormControl('', [Validators.required]),
    soilDept: new FormControl('', Validators.required),
    reserveUtile: new FormControl('', Validators.required),
    //preremplir avec les donnée renvoyer , pour les valider
  });

  ngOnInit(): void {
    //recuperer les données de la requete 1
  }

  onSubmit() {
    //envoyer la requete pour générer
  }
}
