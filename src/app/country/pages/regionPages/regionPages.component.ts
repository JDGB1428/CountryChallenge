import { Component, HostListener, inject, input, signal } from '@angular/core';
import { CardCountriesComponent } from '../../components/CardCountries/CardCountries.component';
import { CountryService } from '../../services/country.service';
import { Region } from '../../types/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-region-pages',
  imports: [CardCountriesComponent],
  templateUrl: './regionPages.component.html',
})
export class RegionPagesComponent {
  isOpen = signal<boolean>(false);

  countryService = inject(CountryService);
  selectRegion = signal<Region | null>(null);
  errorMessage = input<string | null | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

  toggleDropdown(): void {
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.relative')) {
      this.isOpen.set(false);
    }
  }

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryResources = rxResource({
    request: () => ({ region: this.selectRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of(null);
      return this.countryService.searchByRegion(request.region);
    },
  });
}
