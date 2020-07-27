import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

interface ServerResponse {
  message: string;
  status: number;
  data: any;
}
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
    // 1. form validation


    //2. making the request
    this._dataService.addJournal(this.journalForm.value)
    .subscribe((serverRes: ServerResponse) => {
      // deals with status 200
      this._dataService.updateObs(serverRes.data);
      this.journalForm.reset();
      this.router.navigate(['/home']);
    }, (err) => {
      // deals with errors
      console.log(err);
      alert('server error');
    })
  }

}
