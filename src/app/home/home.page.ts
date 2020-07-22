import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Journal { 
  id: Number;
  title: String;
  decrip: String;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // variables used 
  listOfJournals = [];

  journalForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.initForm();
  }

  // init the form object - controls
  initForm(){
    this.journalForm = this.fb.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      decrip: [null, Validators.required],
    })
  }

  // process form
  onFormSubmit(){
      console.log(this.journalForm.value);

      /*
        TODO:
          logic needed to send form data to server.
      */


      // add journals to the array 
      this.listOfJournals.push(this.journalForm.value);
      this.journalForm.reset();
  }
  
}
