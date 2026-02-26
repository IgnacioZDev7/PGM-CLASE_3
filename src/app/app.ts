import { Component, signal } from '@angular/core';
import {AvatarComponent} from './components/avatar/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 title = "clase Gráfica"
}
