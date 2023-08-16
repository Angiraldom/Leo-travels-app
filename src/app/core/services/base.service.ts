import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // Ponerla en las variables de entorno.
  // apiUrl = 'https://leo-travels-api-production.up.railway.app/';
  apiUrl = 'http://localhost:3000/';

  http = inject(HttpClient);

  getMethod(nameMethod: string, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get(this.apiUrl + nameMethod, { params });
  }

  postMethod(nameMethod: string, body: any) {
    return this.http.post(this.apiUrl + nameMethod, body);
  }

  patchMethod(nameMethod: string, body: any) {
    return this.http.patch(this.apiUrl + nameMethod, body);
  }

  deleteMethod(nameMethod: string) {
    return this.http.delete(this.apiUrl + nameMethod);
  }
}
