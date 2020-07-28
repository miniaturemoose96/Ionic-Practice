import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public signUpForm: FormGroup;

  constructor(public fb: FormBuilder, public _dataService: DataService, public router: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.signUpForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  onFormSubmit() {
   console.log('Submits new User info!')
  }

  backHome() {
    this.router.navigate(['/home']);
  }

}
