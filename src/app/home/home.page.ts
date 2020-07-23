import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

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

  constructor(public router: Router, public _dataService: DataService) {
    this.listenForJournals();
  }

  // this listens to the data serivce for chanfes in the journal list
  listenForJournals(){
    this._dataService.journalObs
    .subscribe((data) => {
      console.log(data);
      this.listOfJournals = data;
    })
  }
  
  // this function navigates users to the add journal page
  navigate() {
    this.router.navigate(['/add-journal']);
  }
}
