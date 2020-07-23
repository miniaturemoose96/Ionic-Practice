import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.page.html',
  styleUrls: ['./add-journal.page.scss'],
})
export class AddJournalPage implements OnInit {
  public journalForm: FormGroup;

  constructor(public fb: FormBuilder, public _dataService: DataService, public router: Router) {
    this.initForm();
  }

  ngOnInit() {

  }

  // init the form object - controls
  initForm() {
    this.journalForm = this.fb.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      decrip: [null, Validators.required],
    })
  }

  // process form
  onFormSubmit() {
    console.log(this.journalForm.value);

    /*
      TODO:
        logic needed to send form data to server.
    */
    this._dataService.updateObs(this.journalForm.value);
    this.journalForm.reset();
    this.router.navigate(['/home']);
  }

}
