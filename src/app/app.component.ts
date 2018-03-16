import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    alert("Electron");
    this.hola();
  }

  hola(){
    console.log("Hola nene");
  }
}
