import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private journalListState = new BehaviorSubject([]);
  public journalObs = this.journalListState.asObservable();
  public isLogged = false;
  public token = null;

  constructor(public http: HttpClient, private nativeStorage: NativeStorage) {
    this.getJournal();
  }

  getJournal() {
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

  login(credentials) {
    return this.http.post('http://localhost:8888/auth', credentials)
      .pipe(
        map((res: any) => {
          if (res.token) {
            this.isLogged = true;
            this.saveToken(res.token);
          } else {
            this.isLogged = false;
          }
        })
      )
  }


  signup(credentials) {
    return this.http.post('http://localhost:8888/add-user', credentials);
  }

  saveToken(token) {
    this.nativeStorage.setItem('usersession', { token: token })
      .then(
        () => {
          console.log('Stored item!');
        },
        error => console.error('Error storing item', error)
      );
  }

  getToken() {
    console.log('[data.service.ts] getting token ');
    // Await for the get Item
    //let token =  await this.nativeStorage.getItem('usersession');
    //console.log(token);
    return this.nativeStorage.getItem('usersession')
      .then(
        data => {
          console.log(data);
          if (data.token) {
            this.isLogged = true;
            this.token = data.token;
            console.log('[data.service.ts] user is logged in.')
          }
        },
        error => {
          console.log(error);
        }
      )
  }

}
