import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-water-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './water-chart.html',
  styleUrl: './water-chart.scss',
})
export class WaterChart {
  public lineChartData: ChartConfiguration['data'] = {
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],
    datasets: [
 {
        data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27, 90],
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
        data: [28, 48, 40, 19, 86, 27, 90,65, 59, 80, 81, 56, 55, 40],
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
