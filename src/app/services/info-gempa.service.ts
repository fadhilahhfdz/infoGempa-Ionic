import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoGempaService {

  api = "https://data.bmkg.go.id/DataMKG/TEWS/";

  constructor(private http: HttpClient) { }

  getDataGempa(): Observable<any> {
    return this.http.get(`${this.api}autogempa.json`)
  }
  getGempaTerkini(): Observable<any> {
    return this.http.get(`${this.api}gempaterkini.json`)
  }
  getGempaDirasakan(): Observable<any> {
    return this.http.get(`${this.api}gempadirasakan.json`)
  }
}
