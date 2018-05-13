import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private $current_username: HTMLInputElement;
  private $current_password: HTMLInputElement;

  user_id: number = -1;
  public username: string;
  public password: string;

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    this.$current_username = document.getElementById('username') as HTMLInputElement;
    this.$current_password = document.getElementById('password') as HTMLInputElement;
  }

  checkUsername() {
    this.loginService.getUserExist(this.username).subscribe(
      (data) => {
        console.log('username checked', data);
        if (data.success) {
          this.user_id = data.id;

        }
        else {
          console.log('Username inconnu');
          this.user_id = -1 ;
          this.$current_username.value = '';
          this.$current_username.setAttribute( 'placeholder', 'bad username');
          this.$current_username.focus();
        }
      },
      (error) => {
        console.log('erreur requete utilisateur impossible');
      }
    );
  }

  login() {

      this.loginService.login( this.username, this.password ).subscribe(
        (data) => {
          if (data.success) {
            this.user_id = data.user['0'].user_id;
            this.loginService.user = data.user['0'];
            console.log('User connecté', this.user_id, this.username);
            this.route.navigate(['home']);
            return data;

          }
          else {
            console.log('Password incorrect');
            this.$current_password.value = '';
            this.$current_password.setAttribute( 'placeholder', 'bad password');
            this.$current_password.focus();
          }
        },
        (error) => {
          console.log('erreur requete mot de passe impossible');
        }
      );

  }

}
