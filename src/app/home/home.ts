import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterChart } from './water-chart/water-chart';
import { MatCardModule } from '@angular/material/card';
import { AuthenticationStore } from '../auth/auth.store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SensorValuesCard } from './sensor-values-card/sensor-values-card';
import { SensorDataService } from './sensorDatas.service';
import { map, tap } from 'rxjs';
import { SensorDataDto, SensorMeasurementDto } from '../models/sensorDto';
import { ForecastValues } from '../models/waterchartsDto';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    WaterChart,
    SensorValuesCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private authStore = inject(AuthenticationStore);
  private sensorService = inject(SensorDataService);
  sensorsValues = signal<SensorDataDto | undefined>(undefined);
  currentSensorValues = signal<SensorMeasurementDto | undefined>(undefined);
  isLoading = signal(true);
  chartValues = signal<ForecastValues>({
    forecastDatas: [0.65, 0.59, 0.8, 0.81, 0.56, 0.55, 0.4, 0.28, 0.48, 0.4, 0.19, 0.86, 0.27, 0.9],
    labels: [
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      "Aujourd'hui",
    ],
  });

  ngOnInit(): void {
    console.log(`loggedUser : ${this.authStore.user()}, token : ${this.authStore.token()}`);
    this.getSensor();
  }

  getSensor() {
    this.sensorService
      .getSensorDatas()
      .pipe(
        tap((v) => this.sensorsValues.set(v)),
        map((v) => v.current),
        tap((current) => this.currentSensorValues.set(current))
      )
      .subscribe();
    console.log(this.sensorsValues());
    console.log(this.currentSensorValues());
  }
}
