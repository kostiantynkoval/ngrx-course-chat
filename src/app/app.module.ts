import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from 'server/db-date';


import { AppComponent } from './app.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {Action, StoreModule} from '@ngrx/store';
import {AppState, INITIAL_APP_STATE} from '@shared/models/app-state.model';
import {USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction} from "@core/store/actions";
import * as _ from 'lodash';

function storeReducer(state: AppState = INITIAL_APP_STATE, action: Action): AppState {

  switch (action.type) {
    case USER_THREADS_LOADED_ACTION:
      return handleUserThreadsLoadedAction(state, action);
    default:
      return state;
  }
}

function handleUserThreadsLoadedAction(state: AppState, action: UserThreadsLoadedAction): AppState {
  const userData = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.storeData = {
    participants: _.keyBy(action.payload.participants, 'id'),
    messages: _.keyBy(action.payload.messages, 'id'),
    threads: _.keyBy(action.payload.threads, 'id'),
  };
  return newState;
}

@NgModule({
  declarations: [
    AppComponent,
    MessageSectionComponent,
    ThreadSectionComponent,
    UserSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({storeReducer}),
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
