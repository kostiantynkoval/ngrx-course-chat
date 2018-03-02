import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import { ThreadsService } from '@core/services/threads/threads.service';
import {LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction} from "@core/store/actions";
import 'rxjs/add/operator/switchMap';
import {AllUserData} from "@shared/models/all-user-data.model";

@Injectable()
export class LoadThreadsEffectService {

  constructor(private actions$: Actions, private threadsService: ThreadsService) { console.log('LoadThreadsEffectService run') }

  @Effect() userTreads$ = this.actions$
    .ofType(LOAD_USER_THREADS_ACTION)
    .switchMap(() => this.threadsService.loadUserThreads())
    .map((res: AllUserData) => new UserThreadsLoadedAction(res))
}
