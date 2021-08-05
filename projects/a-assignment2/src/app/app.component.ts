import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FED Assignment2 : Passing data between components, component styles';
  //public message = "";
  songforPlaylist: string[] = [];
  // songforPlaylist: string[] = [];
  recieveFromParent($event: string[]) {
    //alert("Hello");
    this.songforPlaylist = $event;
    console.log($event);
  }
}
