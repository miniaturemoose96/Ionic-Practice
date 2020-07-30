import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  public serverErrorMessage: String;
  constructor(
    public fb: FormBuilder, 
    public dataService: DataService,
    public router: Router  ) { }

    ionViewWillEnter(){
      console.log('[login.ts] ion view will enter');
      this.dataService.getToken().then((data:any) => {
        console.log(this.dataService.isLogged);
        if(this.dataService.isLogged){
          this.router
        }
      })
    }

  ngOnInit() {
    console.log('test');
    this.resetError();
    this.initForm();
  }

  // initializes the form for login
  initForm(){
    this.form = this.fb.group({
      email:['roberto@urbantxt.com', [Validators.required, Validators.email]],
      password: ['g00gle13', Validators.required]
    })
  }

  // reset error message
  resetError(){
    this.serverErrorMessage = null;
  }

  onSubmit(){
    this.resetError();
    console.log(this.form.value);

    // add validatorto check for the fields

    this.dataService.login(this.form.value).subscribe((res:any) => {
      console.log(res);
      this.router.navigate(['/home'])
    }, (err) => {
      console.log(err);
      this.serverErrorMessage = err.error.message;
    })
  }

  navigateToSignup(){
    this.router.navigate(['/sign-up']);
  }



}
