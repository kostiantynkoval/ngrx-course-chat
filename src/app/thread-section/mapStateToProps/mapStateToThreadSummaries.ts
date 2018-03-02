import {AppState} from '@shared/models/app-state.model';
import {Thread} from '@shared/models/thread.model';
import * as _ from 'lodash';

export function mapStateToThreadSummaries (state: AppState) {
  const threads = _.values<Thread>(state.storeData.threads);

  return threads.map(thread => {
    const names = _.keys(thread.participants).map(
      participantId => state.storeData.participants[participantId].name
    );
    const lastMessageId = _.last(thread.messageIds),
      lastMessage = state.storeData.messages[lastMessageId];

    return {
      id: thread.id,
      participantNames: _.join(names, ', '),
      lastMessageText: state.storeData.messages[lastMessageId].text,
      timeStamp: lastMessage.timestamp,
    }
  })
}
