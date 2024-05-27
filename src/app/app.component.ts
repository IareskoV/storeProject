import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Auth, User, UserInfo } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private auth: Auth) {
    this.auth.onAuthStateChanged((user: User | null) => {

      if (user) {
        console.log(user);
        this.status = 'logged in';
      } else {
        this.status = 'not logged in';
      }
    });
  }
  login() {
    this.authService.loginWithGoogle();
  }
  logout() {
    this.authService.logout();
  }

  status = '';
  title = 'storeProject';
}
