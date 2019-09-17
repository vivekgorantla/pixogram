import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-blocked-accounts',
  templateUrl: './blocked-accounts.component.html',
  styleUrls: ['./blocked-accounts.component.css']
})
export class BlockedAccountsComponent implements OnInit {

  constructor(private userService:UserService, private authService: AuthService, private router: Router) { }

  users:User[];

  unblock(user:User) {
    this.router.navigate(['/']);
    this.userService.unblock(user.id).subscribe();
  }

  ngOnInit() {
    this.userService.getBlockedUsers().subscribe(response=>this.users=response);
    if(!this.authService.isLoggedin) {
      this.router.navigate(['/']);
    }
  }
}