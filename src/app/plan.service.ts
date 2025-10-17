import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { GetUserDto } from './models/userDto';
import { LoginDto } from './models/loginDto';
import { createPlanDto } from './models/createPlanDto';
import { createPlan2Dto } from './models/createPlan2';

export class PlanService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  //envoyer 1er form, recupere champs a preremplir
  creatPlan(createPlan: createPlanDto) {
    return this.httpClient.post(`${this.BaseUrl}/`, createPlan);
  }

  //envoyer les parametre finales

  creatPlan2(createPlan: createPlan2Dto) {
    return this.httpClient.post(`${this.BaseUrl}/`, createPlan);
  }
}
