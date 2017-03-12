import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MessagesService } from './_services/messages.service';
import { ThreadsService } from './_services/threads.service';
import { UserService } from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessagesService,
    ThreadsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
