import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProvider } from '../model/providers.model';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProviders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //get one provider
  getProvider(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  //put-update record

  // updateProvider(id: number, newProvider: ProviderClass): Observable<ProviderClass> {
  //   return this.http.put<ProviderClass>(this.apiUrl + id, newProvider);

  // }

  addProvider(provider: IProvider): Observable<any> {
    return this.http.post(this.apiUrl, { provider });
  }
}
