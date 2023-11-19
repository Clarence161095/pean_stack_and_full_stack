import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EHeaderService {
  private apiUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  getEHeaders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'e_headers');
  }

  getDefaultEHeaders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'default_header');
  }
}
