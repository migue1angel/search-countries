import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CachedCountriesData } from '../interfaces/cache-countries.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesHttpService {
  private url: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  // ## operador rxjs para convertir un observable en una promesa
  // searchByCapital(query: string): Promise<Country[]> {
  //   const url = `${this.url}/capital/${query}`;
  //   return firstValueFrom(this.httpClient.get<Country[]>(url)).catch(() => []);
  // }
  public cachedCountriesData: CachedCountriesData = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { countries: [] },
  };

  private saveToLocalStorage() {
    localStorage.setItem('cachedCountries', JSON.stringify(this.cachedCountriesData));
  }
  private loadFromLocalStorage() {
    if (!localStorage.getItem('cachedCountries')) return;

    this.cachedCountriesData = JSON.parse(localStorage.getItem('cachedCountries')!);
  }

  private searchCountry(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByCode(term: string): Observable<Country> {
    const url = `${this.url}/alpha/${term}`;
    return this.searchCountry(url).pipe(map((countries) => countries[0]));
    // return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.searchCountry(url).pipe(
      tap(
        (countries) =>
          (this.cachedCountriesData.byCapital = { term: term, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
    // return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.url}/name/${term}`;
    return this.searchCountry(url).pipe(
      tap(
        (countries) =>
          (this.cachedCountriesData.byCountry = { term: term, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByRegion(term: Region): Observable<Country[]> {
    const url = `${this.url}/region/${term}`;
    return this.searchCountry(url).pipe(
      tap(
        (countries) =>
          (this.cachedCountriesData.byRegion = { term: term, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }
}
