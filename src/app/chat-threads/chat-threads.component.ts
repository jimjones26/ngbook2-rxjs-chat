import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ThreadsService } from '../_services/threads.service';

@Component({
  selector: 'app-chat-threads',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent {

  threads: Observable<any>;

  constructor(threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

}
