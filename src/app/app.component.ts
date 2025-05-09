import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DarkModeService } from './country/services/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'CountryChallenge';

  darkModeService:DarkModeService = inject(DarkModeService)
}
