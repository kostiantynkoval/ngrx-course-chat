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
import { StoreModule } from '@ngrx/store';
import { INITIAL_APP_STATE } from '@shared/models/app-state.model';


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
    StoreModule.forRoot({}),
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
