import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesHttpService } from '../../services/countries-http.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent implements OnInit{
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
  ngOnInit(): void {
    this.countries = this.countriesHttpService.cachedCountriesData.byRegion.countries
    this.selectedRegion = this.countriesHttpService.cachedCountriesData.byRegion.term
  }

  searchByRegion(query: Region) {
    this.isLoading = true;

    this.selectedRegion = query;
    this.countriesHttpService.searchByRegion(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
