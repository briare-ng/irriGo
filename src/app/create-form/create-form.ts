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
import { PlanService } from '../plan.service';
import { createPlanDto } from '../models/createPlanDto';

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
  showFormPart2 = false;

  // createPlanForm = new FormGroup({
  //   surface: new FormControl('', [Validators.required]),
  //   water: new FormControl('', Validators.required),
  //   plant: new FormControl('', Validators.required),
  //   period: new FormControl('', Validators.required),
  //   isInGreenHouse: new FormControl('', Validators.required),
  //   adresse: new FormControl('', Validators.required),
  //   ville: new FormControl('', Validators.required),
  //   codePostale: new FormControl('', Validators.required),
  // });
  //
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
    this.showFormPart2 = true;
    if (this.createPlanForm.valid) {
      const formValues = this.createPlanForm.value;

      const createPlanData: createPlanDto = {
        surface: formValues.surface!,
        projectedConsumption: formValues.projectedConsumption!,
        agricultureType: formValues.agricultureType!,
        plantationType: formValues.plantationType!,
        address: formValues.address!,
        postalCode: formValues.postalCode!,
        city: formValues.city!,
      };

      this.planService.creatPlan(createPlanData, this.authStore.token()!);
    }
    //afficher les infos a confirmer 2eme partie du
  }
}
