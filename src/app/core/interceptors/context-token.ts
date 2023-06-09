import { HttpContext, HttpContextToken } from "@angular/common/http";

const CHECK_TOKEN = new HttpContextToken<boolean>(() => false);

export function checkToken() {
    return new HttpContext().set(CHECK_TOKEN, true)
}