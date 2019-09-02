import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionjavaService {

  constructor(private http: HttpClient) { }

  Url='http://localhost:8080/ejemplo01/cartas'
}
