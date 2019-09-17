import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../models/Media';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-my-media',
  templateUrl: './my-media.component.html',
  styleUrls: ['./my-media.component.css']
})
export class MyMediaComponent implements OnInit {
  src: Media[];
  public images: any = [];

  constructor(private sanitizer:DomSanitizer ,private mediaService: MediaService ,private userService: UserService, private authService: AuthService, private router: Router) { }

  sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.mediaService.getUserMedia(this.userService.id).subscribe(response => this.src = response);
    if(!this.authService.isLoggedin) {
      this.router.navigate(['/']);
    }
  }

}
