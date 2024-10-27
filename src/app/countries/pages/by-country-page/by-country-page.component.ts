import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesHttpService } from '../../services/countries-http.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  private countriesHttpService = inject(CountriesHttpService);

  protected countries: Country[] = [];
  protected isLoading: boolean = false;

  constructor() {}

  searchByCountry(query: string) {
    this.isLoading = true;

    this.countriesHttpService.searchByCountry(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
