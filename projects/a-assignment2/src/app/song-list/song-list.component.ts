import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  title: string = "My Playlist";
  songList: string[] = ['Song1', 'Song2', 'Song3'];
  newsong: string = "";
  chooseSong: string[] = [];
  countSong: number = this.songList.length;
  showSongs: boolean = true;
  listofSong: string[] = [];
  readyToSend: boolean = false;
  //i:number=0;
  @Output() public childEvent = new EventEmitter<string[]>();

  toggle() {
    this.showSongs = !this.showSongs;
    //alert("Toggle Button is clicked");
  }
  addNewSong(type: string) {
    this.songList.push(this.newsong);
    alert("The new song added is " + this.newsong);
    type === 'add' ? this.countSong++ : this.countSong--;

  }
  addSongToPlaylist(data: boolean, name: string) {
    if (data) {
      this.listofSong.push(name)
    } else {
      for (let i = 0; i < this.listofSong.length; i++) {
        if (this.listofSong[i] === name)
          this.listofSong.splice(i, 1)
      }
    }
    if (this.listofSong.length > 0)
      this.readyToSend = true;
    else
      this.readyToSend = false

  }
  addtoPlaylist() {
    //alert("Add to playlist button is clicked");
    // this.childEvent.emit("From Songlist component");
    //this.selectedSongs.push(this.chooseSong);
    var index = this.chooseSong.indexOf(value => value);
    this.childEvent.emit(this.songList[index]);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
