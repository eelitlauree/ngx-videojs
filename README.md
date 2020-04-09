# NgxVideojs


Demonstrate the integrate of [video.js](https://www.npmjs.com/package/video.js) to Angular.

All the integration is done on this angular component. [hls-vjs-player.component.ts](./src/component/hls-vjs-player/hls-vjs-player.component.ts) 

To use the component, you may refer to this [example](./src/app/app.component.html#L2).

```
<hls-vjs-player [options]="narrowband"></hls-vjs-player>
```

While `narrowband` is a video.js options, definition can be found [here](./src/app/app.component.ts#L11-L17). 

```
  narrowband = { 
    autoplay: false,
    sources: [{
      src: 'https://mts-test.esquel.cloud/narrowband/output/8d6009db44d74c88a32ca70a9faf4051/narrow4/eel_pantry_4k-60fps-iphone_x.m3u8',
      type: 'application/x-mpegURL'
    }]
  };
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
