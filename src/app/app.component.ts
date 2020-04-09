import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-videojs';

  narrowband = { 
    sources: [{
      src: 'https://mts-test.esquel.cloud/narrowband/output/8d6009db44d74c88a32ca70a9faf4051/narrow4/eel_pantry_4k-60fps-iphone_x.m3u8',
      type: 'application/x-mpegURL'
    }]
  };

  standard = { 
    sources: [{
      src: 'https://mts-test.esquel.cloud/normal/output/b729c4af064a49af988d4278cb0964b4/normal4/eel_pantry_4k-60fps-iphone_x.m3u8',
      type: 'application/x-mpegURL'
    }]
  };
}
