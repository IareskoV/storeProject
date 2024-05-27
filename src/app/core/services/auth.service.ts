import { Injectable } from '@angular/core';
import {
  Auth,
  OAuthProvider,
  UserCredential,
  signInWithPopup,
} from '@angular/fire/auth';
import { FirebaseProviderId } from '../emuns/providers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginWithGoogle() {
    const provider: OAuthProvider = new OAuthProvider(
      FirebaseProviderId.Google
    );
    return signInWithPopup(this.auth, provider).then(
      (authResult: UserCredential) => {}
    );
  }

  logout() {
    this.auth.signOut();
  }

  constructor(private auth: Auth) {}
}
