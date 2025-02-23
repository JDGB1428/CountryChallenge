import { Component, inject } from '@angular/core';
import { CardCountriesComponent } from "../../components/CardCountries/CardCountries.component";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-all-country-pages',
  imports: [CardCountriesComponent],
  templateUrl: './allCountryPages.component.html',
})
export class AllCountryPagesComponent {
  countryService = inject(CountryService)

  countryResources = rxResource({
      loader: () => {
        return this.countryService.getAllCountry()
      }
    })
}
