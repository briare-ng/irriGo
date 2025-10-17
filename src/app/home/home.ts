import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterChart } from "./water-chart/water-chart";
import { MatCardModule } from '@angular/material/card';
import { AuthenticationStore } from '../auth/auth.store';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,MatCardModule, WaterChart],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{
private authStore = inject(AuthenticationStore)

  ngOnInit(): void {
      console.log(`loggedUser : ${this.authStore.user()}, token : ${this.authStore.token()}`);
  }

  
}
