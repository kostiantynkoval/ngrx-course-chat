import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AllUserData } from '@shared/models/all-user-data.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThreadsService {

  private heroesUrl = '/api';

  constructor(private http: HttpClient) { }

  loadUserThreads(): Observable<any> {
    const messagesO = this.http.get<any>(`${this.heroesUrl}/messages`);
    const participantsO = this.http.get<any>(`${this.heroesUrl}/participants`);
    const threadsO = this.http.get<any>(`${this.heroesUrl}/threads`);
    return forkJoin<AllUserData>(messagesO, participantsO, threadsO);
  }

}
