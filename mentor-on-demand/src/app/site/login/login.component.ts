import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuild: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  toSignup() {
    this.router.navigate(['signup'])
  }

  getUsername() {
    return this.loginForm.value['username'];
  }

  getPassword() {
    return this.loginForm.value['password'];
  }

  invalidLogin: boolean;
  error: string = "Login Failed"

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }


  onSubmit(user) {
    this.authService.authenticate(this.getUsername(), this.getPassword()).subscribe(
      data => {
        this.invalidLogin = false
        this.authService.setToken(data.token);
        this.error = "Logged In successfully";
        this.authService.loggedIn = true;
        this.authService.username = this.getUsername();
        
        
        if (data.role == 'User'){
          this.authService.user = true;
          this.router.navigate(['search'])
        }
          
        else if(data.role == 'Mentor'){
          this.authService.mentor = true;
          this.router.navigate(['mentorHome'])
        }
          
        
        this.authService.username = this.getUsername();
        console.log("logged in");
        
      },
      error => {
        this.invalidLogin = true
        if (error.status == 401)
          this.error = "Invalid Username or Password";
        console.log(error);
      }
    );
  }
}
