import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sensor-values-card',
  imports: [MatIconModule],
  templateUrl: './sensor-values-card.html',
  styleUrl: './sensor-values-card.scss',
})
export class SensorValuesCard {
  @Input() icon: string = 'refresh';
  @Input() description : string = 'ppp'
  @Input() value: string = '45';
}
