import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestCountry } from '../../interfaces/rest-countries.interface';



@Component({
  selector: 'countries-card-countries',
  imports: [RouterLink],
  templateUrl: './CardCountries.component.html',
})
export class CardCountriesComponent {

  cardCountries = input.required<RestCountry[]>()

  errorMessage = input<string | null | unknown>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)


}
