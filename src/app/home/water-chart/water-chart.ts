import { Component, effect, input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ForecastValues } from '../../models/waterchartsDto';

@Component({
  selector: 'app-water-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './water-chart.html',
  styleUrl: './water-chart.scss',
})
export class WaterChart {
  values = input<ForecastValues>({
    forecastDatas: [],
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

  // public lineChartData: ChartConfiguration['data'] = {
  //   labels: this.values.labels,
  //   datasets: [
  //     {
  //       data: this.values.forecastDatas,
  //       label: 'Prévisionnel',
  //       backgroundColor: 'rgba(106, 218, 22,0.2)',
  //       borderColor: 'rgba(106, 218, 22,1)',
  //       pointBackgroundColor: 'rgba(43, 90, 8,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(43, 90, 8,0.8)',
  //       fill: 'origin',
  //     },
  //     {
  //       label: 'Consomation réelle',
  //       backgroundColor: 'rgba(23, 110, 134,0.2)',
  //       borderColor: 'rgba(23, 110, 134,1)',
  //       pointBackgroundColor: 'rgba(61, 128, 11,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(61, 128, 11,1)',
  //       fill: 'origin',
  //     },
  //   ],
  // };
  public lineChartType: ChartType = 'line';
  public lineChartOptions = { responsive: true };
  public lineChartLegend = true;

  public lineChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Prévisionnel',
        backgroundColor: 'rgba(106, 218, 22,0.2)',
        borderColor: 'rgba(106, 218, 22,1)',
        pointBackgroundColor: 'rgba(43, 90, 8,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(43, 90, 8,0.8)',
        fill: 'origin',
      },
      {
        data: [10, 9, 8, 11, 18, 3, 9, 13, 17, 5, 2, 11, 19, 7],
        label: 'Consommation réelle',
        backgroundColor: 'rgba(23, 110, 134,0.2)',
        borderColor: 'rgba(23, 110, 134,1)',
        pointBackgroundColor: 'rgba(61, 128, 11,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(61, 128, 11,1)',
        fill: 'origin',
      },
    ],
  };

  constructor() {
    effect(() => {
      const current = this.values();
      if (!current) return;
      this.lineChartData.labels = current.labels;
      this.lineChartData.datasets[0].data = current.forecastDatas;
    });
  }
}
