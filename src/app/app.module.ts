import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HlsVjsPlayerComponent } from '../component/hls-vjs-player/hls-vjs-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HlsVjsPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
