import { Component } from '@angular/core';
import { MessagesService } from './_services/messages.service';
import { ThreadsService } from './_services/threads.service';
import { UserService } from './_services/user.service';
import { ChatExampleData } from './_data/example-chats.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private messagesService: MessagesService,
    private threadsService: ThreadsService,
    private userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}
