import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'burgao';
}