import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User, UserLiteral} from '../models/User';
import {Observer} from 'rxjs/Observer';

interface UserJson{
  success: boolean;
  user_id: number;
  id: number;
  user: {user_id: number, username: string, password: string};
}

@Injectable()
export class LoginService {
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
    console.log(this._user);
  }
  private service_url: string = 'http://localhost/APIS/TP_Webservice/';
  private _user: User;


  constructor(private http: HttpClient) { }

 /* private getLogin(user: User): Observable<user>{
    const obs: Observable<User> = Observable.create(
      ( observer: Observer<user>)=>{
        this.http
          .post<UserJson>(this.service_url, user)
          .subscribe(
            (data)=> {
              this.user = new User(data.user.username, data.user.password);
              this.user.id = data.user.id;

              observer.next(this.user);
            },
            (error)=>{
              observer.error("Erreur lors de la récupération");
            }
          );
      }
    );
  }*/

  login(current_username, current_password): Observable<UserJson>  {
    return this.http.get(this.service_url + 'user/' + current_username + '/' + current_password) as  Observable<UserJson>;
  }

  getUserExist( username ): Observable<UserJson> {
    return this.http.get( this.service_url + 'users/user/' + username ) as  Observable<UserJson> ;
  }
  getUserConnect( id, password ): Observable<UserJson> {
    return this.http.get( this.service_url + 'users/' + id + '/' + password ) as  Observable<UserJson> ;
  }

}
