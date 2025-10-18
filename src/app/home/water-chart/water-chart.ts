import { Component, Input } from '@angular/core';
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
  @Input() values: ForecastValues = {
    forecastDatas: [

    ],
    labels: [

    ],
  };

  public lineChartData: ChartConfiguration['data'] = {
    labels: this.values.labels,
    datasets: [
      {
        data: this.values.forecastDatas,
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
        data: [
          0.28, 0.48, 0.4, 0.19, 0.86, 0.27, 0.9, 0.65, 0.59, 0.8, 0.81, 0.56,
          0.55, 0.4,
        ],
        label: 'Consomation réelle',
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
  public lineChartType: ChartType = 'line';
  public lineChartOptions = { responsive: true };
  public lineChartLegend = true;
}
