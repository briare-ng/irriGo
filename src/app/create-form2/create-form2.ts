import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
    //
  }

  onSubmit() {}
}
