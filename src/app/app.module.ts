import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './Components/active-users/active-users.component';
import { ActiveChatComponent } from './Components/active-chat/active-chat.component';
import { PostToActiveChatComponent } from './Components/post-to-active-chat/post-to-active-chat.component';
import { UserComponent } from './Components/user/user.component';
import { ChatService } from './services/chat.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    ActiveChatComponent,
    PostToActiveChatComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
