import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {CloudinarySubtitleLibService} from '../../projects/cloudinary-subtitle-lib/src/lib/cloudinary-subtitle-lib.service';
import {CloudinarySubtitleLibService} from 'cloudinary-subtitle-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';


  constructor(private http:HttpClient, private cl:CloudinarySubtitleLibService){
  }
  ngOnInit(): void {

    // console.log(this.cl.addSubtitlesToVideo(this.cloudName, this.videoId, this.subExample));

    // this.cl.addSubtitlesToVideo(this.cloudName,this.videoId,this.subExample);

    // this.url = this.cl.addSubtitlesToVideo(this.cloudName, this.videoPublicId, this.subExample);
    // this.url = this.cl.addSubtitlesToVideo(null, null, this.subExample);


    // this.http.get('https://res.cloudinary.com/candidate-evaluation/video/upload/l_text:arial_60:Cool,y_80,so_00,eo_100/v1545227210/The_Present.mp4',
    // this.http.get('https://res.cloudinary.com/candidate-evaluation/video/upload/w_100/v1545227210/The_Present.mp4',
    //   {
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    //   })
    //   .subscribe( (res) => {console.log(res)});

    this.http.get('http://res.cloudinary.com/candidate-evaluation/raw/upload/v1545227339/thepresent_-_subtitles.txt', {responseType: 'text'})
      .subscribe( res => {
        // console.log(JSON.parse(JSON.stringify(res)));
        // let a  = JSON.parse(JSON.stringify(res));
        // this.cl.addSubtitlesToVideo(this.cloudName, this.videoPublicId, a);
      });

    // this.createURL(this.videoId, this.subExample);
  }

}
