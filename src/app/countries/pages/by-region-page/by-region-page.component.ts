import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesHttpService } from '../../services/countries-http.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  private countriesHttpService = inject(CountriesHttpService);

  protected countries: Country[] = [];
  protected regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  protected selectedRegion?: Region;
  protected isLoading: boolean = false;

  constructor() {}

  searchByRegion(query: Region) {
    this.isLoading = true;

    this.selectedRegion = query;
    this.countriesHttpService.searchByRegion(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
