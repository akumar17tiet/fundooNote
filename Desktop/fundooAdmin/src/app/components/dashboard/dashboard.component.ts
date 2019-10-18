import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  countAdvance: any;
  countBasic: any;
  records: any;

  constructor(private router: Router) { }

  ngOnInit() {
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList",
      type: 'GET',
      success: (response) => {
        this.records = response.data.data;
        console.log(this.records);
        var user_data = '';
        $.each(this.records, function (key, value) {
          user_data += '<tr>';
          user_data += '<td>' + key + '</td>';
          user_data += '<td>' + value.firstName + '</td>';
          user_data += '<td>' + value.lastName + '</td>';
          user_data += '<td>' + value.email + '</td>';
          user_data += '<td>' + value.service + '</td>';
          user_data += '</tr>';
        });

        this.countAdvance = this.records.filter(function (advance) {
          return advance.service == "advance" || advance.service == "Advance"
        }).length;
        $('#countAdvance').append(this.countAdvance);

        this.countBasic = this.records.filter(function (basic) {
          return basic.service == "basic" || basic.service == "Basic"
        }).length;
        $('#countBasic').append(this.countBasic);

        $('#user_table').append(user_data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  OnLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
