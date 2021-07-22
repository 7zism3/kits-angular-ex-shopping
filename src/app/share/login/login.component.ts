import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../server/authentication.service';
import {User} from '../../model/user';
import {FormGroup, NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User =new User();
  username!: string;
  password! : string;
  constructor(private auth: AuthenticationService, private router:Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user).subscribe((data) => {
      const token = data.headers.get('Authentication');
      console.log(token);
      if (token != null) {
        this.auth.setToken(token);
        this.router.navigate(['product']);
      }
      else
      {
          this.router.navigate(['product']);
      }
    });
  }
}
