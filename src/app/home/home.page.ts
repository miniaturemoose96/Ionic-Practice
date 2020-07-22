import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Journal structure
  journal = {
    id: Number,
    title: String,
    decrip: String
  };

  // variables used 
  listOfJournals = [{id: '1',title: 'Note1', decrip: 'Description'},
                    {id: '2',title: 'Note2', decrip: 'Description2'},
                    {id: '3',title: 'Note3', decrip: 'Description3'},
                    {id: '4',title: 'Note4', decrip: 'Description4'},
                    {id: '5',title: 'Note5', decrip: 'Description5'},
                    {id: '6',title: 'Note6', decrip: 'Description6'},
                    {id: '7',title: 'Note7', decrip: 'Description7'},
                    {id: '8',title: 'Note8', decrip: 'Description8'},
                    {id: '9',title: 'Note9', decrip: 'Description9'},
                    {id: '10',title: 'Note10', decrip: 'Description10'}];

  constructor() {}

  // List all note titles
  
}
