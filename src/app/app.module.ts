import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

import { servicesInjectables } from './_services/services';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    servicesInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
