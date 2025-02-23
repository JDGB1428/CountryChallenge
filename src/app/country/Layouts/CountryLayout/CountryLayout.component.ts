import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent { }
