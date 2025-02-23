import { Component, inject, signal } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { CardCountriesComponent } from '../../components/CardCountries/CardCountries.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { RestCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'country-pages',
  imports: [SearchBoxComponent, CardCountriesComponent],
  templateUrl: './countryPages.component.html',
})
export class CountryPagesComponent {

  countries = signal<RestCountry[]>([])
  countryService = inject(CountryService)
  query = signal('')

  countryResources = rxResource({
    request:() => ({query:this.query()}),
    loader:({request}) => {
      if(!request.query) return of([])
      return this.countryService.searchByCountry(request.query);
    },
  })


}

