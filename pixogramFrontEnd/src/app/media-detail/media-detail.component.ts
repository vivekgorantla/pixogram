import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    if(!this.authService.isLoggedin) {
      this.router.navigate(['/']);
    }
  }
}
