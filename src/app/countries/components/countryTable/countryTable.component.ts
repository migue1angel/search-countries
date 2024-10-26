import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './countryTable.component.html',
})
export class CountryTableComponent {


  @Input({required:true})
  countries:Country[] = []
 }
