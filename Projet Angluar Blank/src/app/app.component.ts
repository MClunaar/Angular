import {Component, OnInit} from '@angular/core';
import {CometChatService} from './services/comet-chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'tchat-angular';
  ngOnInit() {
      this.cometChat.init('CometChatApp ID');
  }
    constructor(private cometChat: CometChatService) {}
}
