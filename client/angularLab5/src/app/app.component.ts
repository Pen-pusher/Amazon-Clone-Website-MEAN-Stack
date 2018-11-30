import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab5';
  isCollpased = true;

  constructor(private router: Router, private user: UserService) {
    this.user.getProfile();
  }

  get token() {
    const token = localStorage.getItem('token');
    return token;
  }

  collapse() {
    this.isCollpased = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.user.user = {};
    localStorage.clear();
    this.router.navigate(['']);
  }

}