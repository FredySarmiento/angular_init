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
  person={
    name:'fredycode',
    age: 28,
    avatar:'https://www.w3schools.com/howto/img_avatar.png'
  }
  toggleButton(){
    this.btnDisabled=!this.btnDisabled;
  }
  increaseAge(){
    this.person.age +=1;
  }
  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
