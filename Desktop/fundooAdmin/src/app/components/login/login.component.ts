import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../../models/login.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminData: AdminLogin = new AdminLogin();

  constructor(private router: Router) { }

  ngOnInit() {
    $("#submitLogin").click(function (e) {
      e.preventDefault();
    });
  }

  login() {
    this.adminData = {
      email: $("#email").val(),
      password: $("#password").val()
    }
    
    $.ajax({
      type: 'POST',
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin",
      data: this.adminData,
      dataType: "json",
      success: (response) => {
        localStorage.setItem('token', response.id);
        this.router.navigate(['/dashboard'])
        console.log(" login successful ", response);
      },
      error : (error) => {
        console.log(error);
      }
    });

  }
  }

