import { Component, inject } from '@angular/core';
import { CountriesHttpService } from '../../services/countries-http.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  protected countries: Country[] = [];
  private countriesHttpService = inject(CountriesHttpService);
  constructor() {}

  async searchByCapital(query: string) {
    this.countries = await this.countriesHttpService.searchByCapital(query);
    // try {
    // } catch (error) {
    //   this.countries = [];
    // }
  }
}
