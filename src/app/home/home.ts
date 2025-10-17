import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterChart } from "./water-chart/water-chart";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,MatCardModule, WaterChart],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
