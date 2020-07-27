import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private journalListState = new BehaviorSubject([]);
  public journalObs = this.journalListState.asObservable();

  constructor(public http: HttpClient) {
    this.getJournals().subscribe(
      (data: any) => {
        console.log(data);
        this.journalListState.next(data);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  updateObs(journal) {
    const newList = this.journalListState.value;

    newList.push(journal);

    this.journalListState.next(newList);
  }

  getJournals() {
    return this.http.get('http://localhost:8888/view-journals');
  }

  addJournal(newJournal) {
    return this.http.post('http://localhost:8888/add-journal', newJournal);
  }
}
