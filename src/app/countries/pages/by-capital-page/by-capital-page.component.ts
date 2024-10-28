import { Component, inject, OnInit } from '@angular/core';
import { CountriesHttpService } from '../../services/countries-http.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent implements OnInit {
  private countriesHttpService = inject(CountriesHttpService);
  protected initialValue: string = '';
  protected countries: Country[] = [];
  protected isLoading: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.countries =
      this.countriesHttpService.cachedCountriesData.byCapital.countries;
    this.initialValue =
      this.countriesHttpService.cachedCountriesData.byCapital.term;
  }

  searchByCapital(query: string) {
    this.isLoading = true;
    this.countriesHttpService.searchByCapital(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
