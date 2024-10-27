import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesHttpService } from '../../services/countries-http.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private countriesHttpService = inject(CountriesHttpService);
  private router = inject(Router);
  
  protected country?: Country;
  protected languages!:string[]

  constructor() {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesHttpService.searchByCode(id)))
      .subscribe((country) => {
        if (!country) return this.router.navigate(['/']);
        (this.country = country);
        this.getLanguages()
        return 
      });
  }

  getLanguages(){
    this.languages = Object.keys(this.country!.languages)
  }
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(({ id }) => {
  //     this.searchCountry(id);
  //   });
  // }

  // searchCountry(id: string) {
  //   this.countriesHttpService.searchByCode(id).subscribe((country) => {
  //     this.country = this.country;
  //     console.log(country);
  //   });
  // }
}
