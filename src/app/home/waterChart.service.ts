import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

export class PlanService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  getChartValues() {
    // return this.httpClient.get<>(`${this.BaseUrl}/`);
  }
}
