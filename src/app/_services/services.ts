import { messagesServiceInjectables } from './messages.service';
import { threadsServiceInjectables } from './threads.service';
import { userServiceInjectables } from './user.service';

export let servicesInjectables: Array<any> = [
  messagesServiceInjectables,
  threadsServiceInjectables,
  userServiceInjectables
];
