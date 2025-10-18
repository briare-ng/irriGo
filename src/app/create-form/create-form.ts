import { Component, inject, signal } from '@angular/core';
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
import { GetCreatePlan2Dto } from '../models/createPlan2';

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
  planResponse = signal<GetCreatePlan2Dto | null>(null);
  private router = inject(Router);

  showFormPart2 = signal(false);
  isFormInvalid = false;

  createPlanForm = new FormGroup({
    surface: new FormControl('', Validators.required),
    projectedConsumption: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    agricultureType: new FormControl('', Validators.required),
    plantationType: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  ngOnInit() {}

  onSubmit() {
    this.createPlanForm.markAllAsTouched();

    if (this.createPlanForm.invalid) {
      return;
    }
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
    this.planService.createPlan(createPlan, this.authStore.token()!).subscribe({
      next: (data) => {
        console.log('Réponse backend:');
        this.showFormPart2.set(true);
        this.planResponse.set(data);
      },
      error: () => console.error('Erreur API:'),
    });
  }
}
