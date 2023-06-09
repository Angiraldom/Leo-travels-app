import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  setValue(key: string, value: unknown) {
    const convertValue = JSON.stringify(value);
    localStorage.setItem(key, convertValue);
  }

  getValue(key: string) {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }
}
