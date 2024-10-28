import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesHttpService } from '../../services/countries-http.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit {
  private countriesHttpService = inject(CountriesHttpService);
  protected initialValue: string = '';
  protected countries: Country[] = [];
  protected isLoading: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.countries =
      this.countriesHttpService.cachedCountriesData.byCountry.countries;
    this.initialValue =
      this.countriesHttpService.cachedCountriesData.byCountry.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;

    this.countriesHttpService.searchByCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
