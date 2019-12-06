import { Component, OnInit } from '@angular/core';
import {CometChatService} from '../../services/comet-chat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private cometChat: CometChatService, private router: Router) {}
  login(userId: string) {
      this.cometChat
          .login(userId)
          .then(_ => this.router.navigateByUrl('chat'));
  }
}
