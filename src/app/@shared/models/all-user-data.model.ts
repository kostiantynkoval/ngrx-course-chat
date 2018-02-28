import {Participant} from '@shared/models/participant.model';
import {Thread} from '@shared/models/thread.model';
import {Message} from '@shared/models/message.model';

export interface AllUserData {
  participants: Participant[];
  threads: Thread[];
  messages: Message[];
}
