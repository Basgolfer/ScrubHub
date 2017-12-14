import { Injectable } from '@angular/core';
import {MessageObj} from '../message-obj';
import {isUndefined} from "util";

@Injectable()
export class ChatService {

  private _messages: MessageObj[] = [];

  constructor() {
  }

  addMessage(msg: MessageObj) {
    console.log('SendMessage() in chatService' + msg.message + ' ' + msg.timestamp);
    this._messages.push(msg);
  }
  get allMessages(): MessageObj[] {
    return this._messages;
  }

  getMessageById(id: number): MessageObj {
    return this._messages[this.getMessagebyIndexbyId(id)];
  }
  deleteMessageById(id: number) {
    this._messages.splice(this.getMessagebyIndexbyId(id), 1);
  }
  private getMessagebyIndexbyId(id: number): number {
    for (let i = 0; i < this._messages.length; i++) {
      if (this._messages[i].messageId === id) {
        return i;
      }
    }
    throw new Error('Message not found!');
  }
  editMessageById(id: number, newMessage: string): void {
    if (this._messages[this.getMessagebyIndexbyId(id)] !== undefined) {
      this._messages[this.getMessagebyIndexbyId(id)].message = newMessage;
    }
  }
}
