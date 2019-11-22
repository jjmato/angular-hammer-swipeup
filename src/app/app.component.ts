import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  event;

  log($event){
    this.event = $event;
    console.log('ariiiiiiiibisima: ', $event)
  }
}
