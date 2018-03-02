import {AppState} from '@shared/models/app-state.model';
import {Thread} from '@shared/models/thread.model';
import * as _ from 'lodash';

export function mapStateToUnreadMessagesCounter(state: AppState): number {

  const currentUserId = state.uiState.userId;

  return _.values<Thread>(state.storeData.threads)
    .reduce(
      (acc, thread) => acc + thread.participants[currentUserId], 0
    );
}
