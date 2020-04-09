import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-videojs';

  narrowband = { 
    autoplay: false,
    poster: 'https://ep2-static.esquel.cn/test/video/narrowband/17f0e9eff2884f4fb0edf64f9e752880/0.jpg',
    sources: [{
      src: 'https://ep2-static.esquel.cn/test/video/narrowband/17f0e9eff2884f4fb0edf64f9e752880/PACKAGECONFIG_1586404979290/eel_pantry_4k-60fps-iphone_x.m3u8',
      type: 'application/x-mpegURL'
    }]
  };

  standard = {
    autoplay: false,
    poster: 'https://ep2-static.esquel.cn/test/video/standard/d500c84911ca4db39d8adf933f3961a9/0.jpg',
    sources: [{
      src: 'https://ep2-static.esquel.cn/test/video/standard/d500c84911ca4db39d8adf933f3961a9/PACKAGECONFIG_1586405394671/eel_pantry_4k-60fps-iphone_x.m3u8',
      type: 'application/x-mpegURL'
    }]
  };
}
