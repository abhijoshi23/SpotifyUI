/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
<<<<<<< HEAD
* Name: Abhi Vishalkumar Joshi Student ID: _146463203_ Date: _29/07/2022__
*
********************************************************************************/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
=======
* Name: Abhi Vishalkumar Joshi Student ID: _146463203_ Date: _17/08/2022__
*
********************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';
>>>>>>> 447658680119fd3cdf8b9f395dc63e3142cc4b5e

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
<<<<<<< HEAD
export class AppComponent {
  title = 'web422-a4';
  searchString: string | undefined;

  constructor(private router: Router) {}
=======
export class AppComponent implements OnInit {
  title = 'web422-a5';
  searchString: string | undefined;
  token: any;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // only read the token on "NavigationStart"
        this.token = this.auth.readToken();
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
>>>>>>> 447658680119fd3cdf8b9f395dc63e3142cc4b5e

  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }
}