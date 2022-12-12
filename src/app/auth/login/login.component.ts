import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;
  hide = true;

  constructor(private fb: UntypedFormBuilder, private auth: AuthService, private router: Router) {

    this.form = fb.group({
      email: ['123@learn.io', [Validators.required, Validators.email, Validators.minLength(7),
      Validators.maxLength(60)]],
      password: ['testpass', [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit() {

  }

  login() {
    const val = this.form.value;
    this.auth.login(val.email, val.password).subscribe(
      (reply: any) => {
        localStorage.setItem("authJwtToken", reply.authJwtToken);
        this.router.navigateByUrl('/cranes')
        }
    ),
      err => {
        console.log("Login failed:", err);
        alert('Login failed.');
      }
  }

  get email() { return this.form.get('email') };
  get password() { return this.form.get('password') };
}
