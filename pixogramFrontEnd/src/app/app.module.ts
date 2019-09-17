import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { MyMediaComponent } from './my-media/my-media.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { BlockedAccountsComponent } from './blocked-accounts/blocked-accounts.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { SearchComponent } from './search/search.component';
import { AuthService } from './auth.service';
import { FollowComponent } from './follow/follow.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginHomeComponent } from './login-home/login-home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UploadMediaComponent,
    MyMediaComponent,
    MediaDetailComponent,
    NewsFeedComponent,
    BlockedAccountsComponent,
    AccountUpdateComponent,
    SearchComponent,
    FollowComponent,
    LoginHomeComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'UploadMedia', component: UploadMediaComponent},
      {path: 'MediaDetail', component: MediaDetailComponent},
      {path: 'MyMedia', component: MyMediaComponent},
      {path: 'MediaDetail', component: MyMediaComponent},
      {path: 'Follow', component: FollowComponent},
      {path: 'Login', component: LoginComponent},
      {path: 'Register', component: RegisterComponent},
      {path: 'NewsFeed', component: NewsFeedComponent},
      {path: 'BlockedAccounts', component: BlockedAccountsComponent},
      {path: 'AccountUpdate', component: AccountUpdateComponent},
      {path: 'Search', component: SearchComponent},
      {path: 'LoggedInHome', component: LoginHomeComponent},
      {path: 'MyAccount', component: MyaccountComponent},
    ]),
    HttpClientModule

],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
