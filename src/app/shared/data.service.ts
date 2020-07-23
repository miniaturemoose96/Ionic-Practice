import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private journalListState = new BehaviorSubject([]);
  public journalObs = this.journalListState.asObservable();

  constructor() { }

  updateObs(journal){
      const newList = this.journalListState.value;

      newList.push(journal);
  
      this.journalListState.next(newList);
  }
}
