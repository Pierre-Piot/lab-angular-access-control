import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<any> = [];
  // newMessage: Object = {};
  constructor() { }

addAccessItem(person:string,message:string):void{
  // this.newMessage['person'] = person;
  // this.newMessage['message'] = message;
  // this.newMessage['createdAt'] = new
  // Date(new Date().getTime());
  // this.logMessages.push(this.newMessage);

  this.logMessages.push({
    person: person,
    message: message,
    createdAt: new Date().getTime()
  });
}

getAccesLog():Array<any>{
  return this.logMessages
}

}
