import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private router: Router) {}
  // sendToken(id: string) {
  //   localStorage.setItem("LoggedInUser", id)
  // }
  // getToken() {
  //   return localStorage.getItem("LoggedInUser")
  // }
  // isLoggednIn() {
  //   return this.getToken() !== null;
  // }
  // logout() {
  //   localStorage.removeItem("LoggedInUser");
  //   this.router.navigate(["login"]);
  // }
}
