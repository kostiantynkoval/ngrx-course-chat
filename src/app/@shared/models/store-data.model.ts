import {Participant} from '@shared/models/participant.model';
import {Thread} from '@shared/models/thread.model';
import {Message} from '@app/@shared/models/message.model';

export interface StoreData {
  participants: {[key: number]: Participant};
  threads: {[key: number]: Thread};
  messages: {[key: number]: Message}
}

export const INITIAL_STORE_DATA: StoreData = {
  participants: {},
  threads: {},
  messages: {}
};
