import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  isDisplaying : boolean = false;
  count : number = 0;
  clicks: number[] = [];

  onShowPhrase() {
    // this.displaying ? this.displaying = false : this.displaying = true;
    this.isDisplaying = !this.isDisplaying;
    this.count ++;
    this.clicks.push(this.count);
    
  }
  
  onChangeColor(clickTimes : number) {

    return clickTimes > 4 ? 'letterColor' : '';
  }
  
  

}

