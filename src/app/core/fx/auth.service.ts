import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import {  of, Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<IUser | null>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,

  ) { }

  public login(email: string, password: string): Observable<boolean> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.getUser();
          return true;
        })
        .catch(err => false)
    );
  }


  private getUser() {

    this.currentUser = this.afAuth.authState
      .pipe(switchMap(
        (user) => {
          if (user) {
            return this.db.doc<IUser>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        }
      ));
  }

}
