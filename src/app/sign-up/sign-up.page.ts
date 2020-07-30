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
  public serverErrorMessage: String;

  constructor(
    public fb: FormBuilder, 
    public _dataService: DataService, 
    public router: Router) {

    }

  ngOnInit() {
    this.resetServerMessage()
    this.initForm();
  }

  resetServerMessage(){
    this.serverErrorMessage = null;
  }

  initForm() {
    this.signUpForm = this.fb.group({
      firstName: ['roberto', Validators.required],
      lastName: ['sanchez', Validators.required],
      email: ['roberto@urbantxt.com', Validators.required],
      password: ['g00gle13', Validators.required],
    });
  }

  onFormSubmit() {
    this.resetServerMessage();
   console.log('Submits new User info!');
   this._dataService.signup(this.signUpForm.value)
   .subscribe((res) => {
    console.log(res);
   }, (err) => {
     console.log(err);
     this.serverErrorMessage = err.error.message;
   })
  }

  backHome() {
    this.router.navigate(['/login']);
  }

}
