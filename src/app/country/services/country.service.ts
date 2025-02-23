import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Region } from '../types/region.type';
import { RestCountry } from '../interfaces/rest-countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  private http = inject(HttpClient)


  getAllCountry():Observable<RestCountry[]>{
    const url = `${this.apiUrl}/all`;
    return this.http.get<RestCountry[]>(url).pipe(
      catchError((error)=>{
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo obtener los paises`)
        )
      })
    )
  }


  searchByCountry(query:string):Observable<RestCountry[]>{
    query = query.toLowerCase();
    const url = `${this.apiUrl}/name/${query}`
    return this.http.get<RestCountry[]>(url).pipe(
      catchError((error)=>{
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo obtener paises con ese query ${query}`)
        )
      })
    )
  }

  searchCountryByCode(code:string):Observable<RestCountry | null>{
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<RestCountry[]>(url).pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError((error)=>{
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo ingresar al paises con ese query ${code}`)
        )
      })
    )
  }

  searchByRegion(region:Region){
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<RestCountry[]>(url).pipe(
      catchError((error)=>{
        console.log('Error fetching', error)
        return throwError(
          () => new Error(`No se pudo ingresar al paises con ese query ${region}`)
        )
      })
    )
  }

}
