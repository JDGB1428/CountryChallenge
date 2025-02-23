import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop'
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'country-single-country-page',
  imports: [],
  templateUrl: './SingleCountryPage.component.html',
})
export class SingleCountryPageComponent {
  countryCode = inject(ActivatedRoute).snapshot.params['code']
  countryService = inject(CountryService)

  countryResources = rxResource({
    request:() => ({code: this.countryCode}),
    loader: ({request}) => {
      return this.countryService.searchCountryByCode(request.code)
    }
  })

}
