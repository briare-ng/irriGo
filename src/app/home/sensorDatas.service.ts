import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SensorDataDto } from '../models/sensorDto';

@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  private readonly httpClient = inject(HttpClient);
  private readonly url =
    'https://agritech-ba417-default-rtdb.europe-west1.firebasedatabase.app/weather_data.json';

  getSensorDatas() {
    return this.httpClient.get<SensorDataDto>(this.url);
  }
}
