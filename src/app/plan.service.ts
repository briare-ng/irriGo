import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { createPlanDto } from './models/createPlanDto';
import { GetCreatePlan2Dto } from './models/createPlan2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // permet d’injecter le service partout
})
export class PlanService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  createPlan(createPlan: createPlanDto, token: string): Observable<GetCreatePlan2Dto> {
    return this.httpClient.post<GetCreatePlan2Dto>(`${this.BaseUrl}/parcel`, createPlan, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }

  createPlan2(createPlan: GetCreatePlan2Dto, token: string) {
    return this.httpClient.post(
      `${this.BaseUrl}/parcel/onboarding/${createPlan.parcelId}`,
      createPlan
    );
  }
}
