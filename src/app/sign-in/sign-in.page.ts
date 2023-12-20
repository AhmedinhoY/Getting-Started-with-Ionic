import { Component, OnInit } from '@angular/core';
import { FBServiceService } from '../fbservice.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  membersForm: FormGroup = new FormGroup({});

  constructor(public fb: FBServiceService, public formBuilder: FormBuilder) {
    this.signInForm = formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;
      this.fb.login(email, password);
    }
  }
  signOut() {
    this.fb.logout();
  }

  ngOnInit() {}
}
