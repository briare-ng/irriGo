import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreateForm2 } from '../create-form2/create-form2';
import { AuthenticationStore } from '../auth/auth.store';
import { Router } from '@angular/router';
import { PlanService } from '../plan.service';
import { createPlanDto } from '../models/createPlanDto';
import { AgricultureType } from '../_utills/agriculture.type.enum';
import { PlantationType } from '../_utills/plantation.enum';
import { Period } from '../_utills/periode.enum';

@Component({
  selector: 'app-create-form',
  imports: [FormsModule, ReactiveFormsModule, CreateForm2],
  providers: [PlanService],
  templateUrl: './create-form.html',
  styleUrl: './create-form.scss',
})
export class CreateForm {
  private readonly authStore = inject(AuthenticationStore);
  private readonly planService = inject(PlanService);
  private router = inject(Router);
  private planService = inject(PlanService);

  showFormPart2 = false;
  isFormInvalid = false;

  createPlanForm = new FormGroup({
    surface: new FormControl<number | null>(null, [Validators.required]),
    projectedConsumption: new FormControl<number | null>(null, Validators.required),
    agricultureType: new FormControl('', Validators.required),
    plantationType: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postalCode: new FormControl<number | null>(null, Validators.required),
    city: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  onSubmit() {
    this.createPlanForm.markAllAsTouched();

    if (this.createPlanForm.invalid) {
      this.isFormInvalid = true;
      console.log('Formulaire invalide');
      return;
    }

    //  Création
    const formValue = this.createPlanForm.value;

    const createPlan: createPlanDto = {
      surface: Number(formValue.surface),
      projectedConsumption: Number(formValue.projectedConsumption),
      period: formValue.period as Period,
      agricultureType: formValue.agricultureType as AgricultureType,
      plantationType: formValue.plantationType as PlantationType,
      address: formValue.address!,
      postalCode: Number(formValue.postalCode),
      city: formValue.city!,
    };

    //  Appel du service
    this.planService.createPlan(createPlan).subscribe({
      next: (res) => {
        console.log('Réponse backend:', res);
        this.showFormPart2 = true;
      },
      error: (err) => console.error('Erreur API:', err),
    });
  }
}
