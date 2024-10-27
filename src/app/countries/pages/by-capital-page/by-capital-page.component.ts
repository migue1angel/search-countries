import { Component, inject } from '@angular/core';
import { CountriesHttpService } from '../../services/countries-http.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  private countriesHttpService = inject(CountriesHttpService);

  protected countries: Country[] = [];
  protected isLoading: boolean = false;

  constructor() {}

  searchByCapital(query: string) {
    this.isLoading = true;
    this.countriesHttpService.searchByCapital(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
