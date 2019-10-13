import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  displaying : boolean = false;
  contador : number = 0;
  clicks = [];

  onShowPhrase() {
    // this.displaying ? this.displaying = false : this.displaying = true;
    this.displaying = !this.displaying;
    this.contador ++;
    this.clicks.push(this.contador);
    
  } 
  
  

}

