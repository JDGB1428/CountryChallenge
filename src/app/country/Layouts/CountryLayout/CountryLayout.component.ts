import { Component, effect, HostBinding, signal } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, RouterLink, NavbarComponent, CommonModule],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent {
}
