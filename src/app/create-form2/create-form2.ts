import { Component, effect, inject, Input, OnInit, Signal, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationStore } from '../auth/auth.store';
import { PlanService } from '../plan.service';
import { SoilType } from '../_utills/soil.type.enum';
import { GetCreatePlan2Dto } from '../models/createPlan2';
import { DepthLabel } from '../_utills/depth.level';

@Component({
  selector: 'app-create-form2',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-form2.html',
  styleUrl: './create-form2.scss',
})
export class CreateForm2 implements OnInit {
  private readonly authStore = inject(AuthenticationStore);
  private readonly planService = inject(PlanService);

  @Input({ required: true }) planData!: Signal<GetCreatePlan2Dto | null>;
  createPlanForm = new FormGroup({
    soil: new FormControl('', [Validators.required]),
    soilDept: new FormControl('', Validators.required),
    reserveUtile: new FormControl('', Validators.required),
    parcelId: new FormControl('', Validators.required),
  });

  constructor() {
    effect(() => {
      const plan = this.planData();
      if (plan) {
        console.log('Plan received via signal:', plan);
        this.createPlanForm.patchValue({
          soil: plan.soilType,
          soilDept: plan.depthLabel,
          reserveUtile: plan.usefulReserve.toString(),
          parcelId: plan.parcelId,
        });
      }
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.createPlanForm.markAllAsTouched();

    if (this.createPlanForm.invalid) {
      return;
    }
    const formValue = this.createPlanForm.value;

    const createPlan: GetCreatePlan2Dto = {
      soilType: formValue.soil as SoilType,
      depthLabel: formValue.soilDept as DepthLabel,
      usefulReserve: Number(formValue.reserveUtile),
      parcelId: formValue.parcelId!,
    };

    this.planService.createPlan2(createPlan, this.authStore.token()!).subscribe({
      next: () => {
        console.log('Réponse backend:');
      },
      error: () => console.error('Erreur API:'),
    });
  }
}
