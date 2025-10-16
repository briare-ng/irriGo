import { Component } from '@angular/core';
import { Header } from "./header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
