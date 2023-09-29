import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup = {} as FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildBasicForm();
    localStorage.clear();
  }

  buildBasicForm() {
    this.signinForm = this.fb.group({
      email: ['test@example.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required, Validators.minLength(4)]],
    });
  }

  signin() {
    this.errorMessage = '';
    this.authService.signin(this.signinForm.value).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/home');
      },
      error: (err: string) => {
        this.errorMessage = err;
      },
    });
  }
}
