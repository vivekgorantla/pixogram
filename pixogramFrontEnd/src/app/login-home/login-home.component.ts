import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    if(!this.authService.isLoggedin) {
      this.router.navigate(['/']);
    }
  }

}
