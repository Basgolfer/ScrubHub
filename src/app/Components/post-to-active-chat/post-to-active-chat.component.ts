import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {MessageObj} from '../../message-obj';

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
  providers: [ChatService]
})
export class PostToActiveChatComponent implements OnInit {

  constructor(private chat: ChatService) {
  }

  ngOnInit() {

  }

  create(input: any): void {
    const newMessage: MessageObj = {
      message: input.value,
      messageId: this.generateId(),
      userId: 1,
      timestamp: new Date()
    }
    input.value = '';
    this.chat.addMessage(newMessage);
  }

  handleSubmit(event, input: any) {
    if (event.keyCode === 13) {
      this.create(input);
    }
  }

  generateId(): number {
    return new Date().getTime();
  }

}
