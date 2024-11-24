import { Component } from '@angular/core';
import { NavsComponent } from "./navs/navs.component";
import { LoginComponent } from "./login/login.component";
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pojecty';
}
