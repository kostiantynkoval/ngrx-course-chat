import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '@core/services/threads/threads.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '@shared/models/app-state.model';
import { AllUserData } from '@shared/models/all-user-data.model';
import { ThreadSummary } from '@shared/models/thread-summary.model';
import { UserThreadsLoadedAction, LoadUserThreadsAction } from '@core/store/actions';
import {
  mapStateToUnreadMessagesCounter,
  mapStateToUserName,
  mapStateToThreadSummaries
} from './mapStateToProps';

import 'rxjs/add/operator/skip';
import {Observable} from "rxjs/Observable";
import {Thread} from "@shared/models/thread.model";

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummary[]>;

  constructor(
        private threadsService: ThreadsService,
        private store: Store<any>,
  ) {

    this.userName$ = store
                      .skip(1)
                      .pipe(select('storeReducer'))
                      .map(mapStateToUserName);

    this.unreadMessagesCounter$ = store
      .skip(1)
      .pipe(select('storeReducer'))
      .map(mapStateToUnreadMessagesCounter);

    this.threadSummaries$ = store
      .skip(1)
      .pipe(select('storeReducer'))
      .map(mapStateToThreadSummaries);

    this.threadSummaries$.subscribe(res => console.log('RES', res));
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserThreadsAction())

    // this.threadsService.loadUserThreads().subscribe((res: AllUserData) => this.store.dispatch(new UserThreadsLoadedAction(res)));
  }

}
