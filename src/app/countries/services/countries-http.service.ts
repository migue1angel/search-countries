import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesHttpService {
  private url: string = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) {}

  // ## operador rxjs para convertir un observable en una promesa
  // searchByCapital(query: string): Promise<Country[]> {
  //   const url = `${this.url}/capital/${query}`;
  //   return firstValueFrom(this.httpClient.get<Country[]>(url)).catch(() => []);
  // }

  private searchCountry(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByCode(query: string): Observable<Country> {
    const url = `${this.url}/alpha/${query}`;
    return this.searchCountry(url).pipe(
      map( countries => countries[0])
    );
    // return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.url}/capital/${query}`;
    return this.searchCountry(url);
    // return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.url}/name/${query}`;
    return this.searchCountry(url);
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.url}/region/${query}`;
    return this.searchCountry(url);
  }
}
