import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  title: string = "My Playlist";
  songList: string[] = ['Song1', 'Song2', 'Song3'];
  newsong: string = "";
  countSong: number = this.songList.length;
  showSongs: boolean = true;

  toggle() {
    this.showSongs = !this.showSongs;
    //alert("Toggle Button is clicked");
  }
  addNewSong(type: string) {
    this.songList.push(this.newsong);
    alert("The new song added is " + this.newsong);
    type === 'add' ? this.countSong++ : this.countSong--;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
