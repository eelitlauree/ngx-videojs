import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'hls-vjs-player',
  template: `
    <video #target class="video-js vjs-default-skin vjs-big-play-centered" playsinline >
    </video>
  `,
  styleUrls: [
    './hls-vjs-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HlsVjsPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('target') target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: videojs.PlayerOptions;
  
  
  player: videojs.Player;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    // instantiate Video.js
  }

  ngAfterViewInit() {
    let defaultOptions : videojs.PlayerOptions = {
      controls: true,
      autoplay: true,
      preload: 'auto',
      techOrder: ['html5'],
      nativeControlsForTouch: false,
      fluid: true
    };

    let inputOptions :  videojs.PlayerOptions = Object.assign(defaultOptions, this.options);

    this.player = videojs(this.target.nativeElement, inputOptions, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

    
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}