import { Component } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>{{ message.title }}</h1>
      <p>{{ message.content }} </p>
    </div>
  `,
  styles: ``
})
export class AboutComponent {
  message: Message;

  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessageById(2) || {} as Message;
  }
}
