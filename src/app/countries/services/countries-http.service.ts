import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesHttpService {
  private url: string = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) {}

  searchByCapital(query: string): Promise<Country[]> {
    const url = `${this.url}/capital/${query}`;
    return firstValueFrom(this.httpClient.get<Country[]>(url)).catch(() => {
      return [];
    });
  }
  searchByCountry(query: string): Promise<Country[]> {
    const url = `${this.url}/capital/${query}`;
    return firstValueFrom(this.httpClient.get<Country[]>(url));
  }
  searchByRegion(query: string): Promise<Country[]> {
    const url = `${this.url}/capital/${query}`;
    return firstValueFrom(this.httpClient.get<Country[]>(url));
  }
}
