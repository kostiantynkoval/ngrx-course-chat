import { Component, OnInit } from '@angular/core';
import { AllUserData } from '@shared/models/all-user-data.model';
import { UserThreadsLoadedAction } from '@core/store/actions';
import { Store } from '@ngrx/store';
import { ThreadsService } from '@core/services/threads/threads.service';
import { AppState } from '@shared/models/app-state.model';

@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(
        private store: Store<AppState>,
        private threadsService: ThreadsService
  ) { }

  ngOnInit() {
    //this.threadsService.loadUserThreads().subscribe((res: AllUserData) => console.log('message-section res', res));
  }

}
