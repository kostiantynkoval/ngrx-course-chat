import { Component, OnInit } from '@angular/core';
import { ThreadsService } from '@core/services/threads/threads.service';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/models/app-state.model';
import { AllUserData } from '@shared/models/all-user-data.model';
import { LoadUserThreadsAction } from '@core/store/actions';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(
        private threadsService: ThreadsService,
        private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.threadsService.loadUserThreads().subscribe((res: AllUserData) => this.store.dispatch(new LoadUserThreadsAction(res)));
  }

}
