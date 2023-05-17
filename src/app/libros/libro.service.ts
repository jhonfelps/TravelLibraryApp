import { Injectable } from '@angular/core';
import { Observable, map, of, catchError, throwError, tap, Subject } from 'rxjs';
import { libro, librosTable } from './libro';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class libroService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  librosChange = new Subject<librosTable>;
  constructor(private http: HttpClient, private router: Router) { }

  public getlibros(
    pageIndex: number, pageSize: number, search:string
  ): Observable<librosTable> {
    const urlEndPoint: string = `https://localhost:44377/api/libros?pageIndex=${pageIndex}&pageSize=${pageSize}&Search=${search}`;

    return this.http.get<librosTable>(urlEndPoint);
  }

  //PDF
  generateReport(){
    return this.http.get('https://localhost:44377/api/libros/generateRotativaPdf?mes=8', { responseType: 'blob' });
  }
}
