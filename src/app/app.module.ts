import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { effects, store, instrumentation } from './store';
import { SharedModule } from './shared/shared.module';
import {PaperService} from "./papers/papers.service";
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    store,
    effects,
    routing,
    instrumentation
  ],
  providers: [

    PaperService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
