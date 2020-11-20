import { AuthService } from './../providers/auth-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  username: string;
  password: string;

  loading = false;
  loginError = false;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.loading = false;
    this.loginError = false;
    this.username = "";
    this.password = "";
  }

  ionViewWillEnter() {
    this.loading = false;
    this.loginError = false;
    this.username = "";
    this.password = "";
  }

  login() {
    this.loading = true;
    this.loginError = false;

    this.authService
      .login(this.username, this.password)
      .then((user) => {
        this.router.navigate(['/coaching-paths']);
      }, (err) => {
        console.log(JSON.stringify(err));
        this.loading = false;
        this.loginError = true;
      });
  }
}
