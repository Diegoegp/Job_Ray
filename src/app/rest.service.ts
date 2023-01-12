import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlPost:string = "https://localhost:44381/api/monitors/create";
const urlUpdate:string = "https://localhost:44381/api/monitors/update";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  

  constructor(private http: HttpClient) { }

  /*** get ***/

  public get(url:string): Observable<any> {
    return this.http.get<any>(url)
  }

  /*** post ***/

  public post(monitor:any): Observable<any> {
    return this.http.post<any>(urlPost, monitor);
  }

  /*** put ***/

  public update(monitor:any): Observable<any> {
    return this.http.put<any>(urlUpdate, monitor);
  }

  /*** delete ***/

  public delete(monitor:any): Observable<any> {
    return this.http.delete<any>(`https://localhost:44381/api/monitors/${monitor}`);
  }

}
