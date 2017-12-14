import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chat.service';
import { MessageObj } from '../../app/message-obj';
import ExpectationFailed = jasmine.errors.ExpectationFailed;

describe('ChatService', () => {
  let testMessage1: MessageObj = {message: 'sup', messageId: 0, userId: 1, timestamp: new Date()};
  let testMessage2: MessageObj = {message: 'test2', messageId: 1, userId: 1, timestamp: new Date()};
  let idToDelete:  number
  let idToGet: number;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
    testMessage1 = {message: 'sup', messageId: 0, userId: 1, timestamp: new Date()};
    testMessage2 = {message: 'test2', messageId: 1, userId: 1, timestamp: new Date()};
    idToDelete = 1;
    idToGet = 0;
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
  it('should add a message', inject([ChatService], (service: ChatService) => {
    service.addMessage(testMessage1);
    service.addMessage(testMessage2);
    expect(service.allMessages[1].message).toEqual('test2');
  }));
  it('should get all messages', inject([ChatService], (service: ChatService) => {
    service.addMessage(testMessage1);
    service.addMessage(testMessage2);
    service.addMessage(testMessage1);
    service.addMessage(testMessage1);
    service.addMessage(testMessage2);
    service.addMessage(testMessage1);
    expect(service.allMessages.length).toEqual(6);
  }));
  it('should delete a message by id', inject([ChatService], (service: ChatService) => {
    service.addMessage(testMessage1);
    service.addMessage(testMessage2);
    service.deleteMessageById(idToDelete);
    expect(service.allMessages.length).toEqual(1);
  }));
  it('should get a message by id', inject([ChatService], (service: ChatService) => {
    service.addMessage(testMessage1);
    expect(service.getMessageById(idToGet)).toEqual(testMessage1);
  }));
  it('should attempt to get message by id that doesnt exist(returning an error)', inject([ChatService], (service: ChatService) => {
    expect( () => {
      service.getMessageById(100);
    }).toThrowError('Message not found!');
  }));
  it('should be able to edit a message by id', inject([ChatService], (service: ChatService) => {
    service.addMessage(testMessage1);
    service.editMessageById(0, 'new Message');
    expect(service.getMessageById(0).message).toEqual('new Message');
  }));
  it('should not be able to edit a message by an id that does not exist (returning an error)', inject([ChatService], (service: ChatService) => {
    service.addMessage(testMessage1);
    expect( () => {
      service.editMessageById(5, 'newMessage');
    }).toThrowError('Message not found!');
  }));
});
