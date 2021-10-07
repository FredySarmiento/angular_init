import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name= 'fredycode';
  age = 28;
  img = "https://www.w3schools.com/howto/img_avatar.png"
  btnDisabled=true;
}
