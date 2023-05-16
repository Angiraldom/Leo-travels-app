import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // Ponerla en las variables de entorno.
  apiUrl = 'http://localhost:3000/';

  private http = inject(HttpClient);

  getMethod(nameMethod: string) {
    return this.http.get(this.apiUrl + nameMethod);
  }

  postMethod(nameMethod: string, body: any) {
    return this.http.post(this.apiUrl + nameMethod, body);
  }

  updateMethod(nameMethod: string, body: any) {
    return this.http.patch(this.apiUrl + nameMethod, body);
  }
}
