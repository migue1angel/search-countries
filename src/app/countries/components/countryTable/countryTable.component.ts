import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-table',
  templateUrl: './countryTable.component.html',
})
export class CountryTableComponent implements OnInit, OnChanges {
  @Input({ required: true })
  countries: Country[] = [];
  protected currentPage: number = 1;
  protected limit: number = 10;
  paginatedCountries!: Country[];

  ngOnChanges(changes: SimpleChanges): void {
    this.pagination();
  }

  ngOnInit(): void {
    this.pagination();
  }

  pagination(page: number = 1) {
    this.currentPage = page;

    const skip = (this.currentPage - 1) * 10;
    const limit = this.limit * page;
    this.paginatedCountries = [...this.countries.slice(skip, limit)];
  }

  get numberPages() {
    return Math.ceil(this.countries.length / this.limit);
  }

  next() {
    if (this.currentPage === this.numberPages) return;
    this.currentPage = this.currentPage + 1;
    this.pagination(this.currentPage);
  }

  prev() {
    if (this.currentPage === 1) return;
    this.currentPage = this.currentPage - 1;
    this.pagination(this.currentPage);
  }
}
