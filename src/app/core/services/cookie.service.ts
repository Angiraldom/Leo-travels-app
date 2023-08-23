import { Injectable } from '@angular/core';
import jwt_decode, { JwtPayload } from 'jwt-decode';

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

  isValidToken(nameToken: string) {
    const token = this.getValue(nameToken);
    if (!token) {
      return false;
    }
    const decodeToken = jwt_decode<JwtPayload>(token);
    if (!decodeToken || !decodeToken.exp) {
      return false;
    }
    const tokenDate = new Date(0);
    tokenDate.setUTCSeconds(decodeToken.exp);
    const today = new Date();
    return tokenDate.getTime() > today.getTime();
  }
}
