import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/fx/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public invalidCredentials = false;
  public fillAllFields = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  public goToHome() {
    this.router.navigate(['/home']);
  }

  public submit() {
    const { email, password } = this.loginForm.value;
    this.ngxService.start();
    if (this.loginForm.valid) {
      this.auth.login(email, password).subscribe(success => {
        console.log(success);
        if (success) {
          this.router.navigate(['/dashboard']);
        } else {
          console.log('invalid username or password');
          this.invalidCredentials = true;
          this.ngxService.stop();
        }
      });
    } else {
      this.fillAllFields = true;
      console.log('Please fill in all the details');
      this.ngxService.stop();
    }
  }

}
