import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class WaterChartService {
  private readonly httpClient = inject(HttpClient);
  private readonly BaseUrl = environment.apiUrl;

  getChartValues(token: string) {
    return this.httpClient.get<number[]>(`${this.BaseUrl}/parcel/charts`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }
}
