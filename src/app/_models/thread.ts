import { uuid } from '../_util/uuid';
import { Message } from './message';

export class Thread {

  lastMessage: Message;


  constructor(public id?: string,
              public name?: string,
              public avatarSrc?: string) {
    this.id = id || uuid();
  }
}
