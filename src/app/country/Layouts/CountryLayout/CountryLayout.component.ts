import { Component} from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent {
}
