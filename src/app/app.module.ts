import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { EntityServiceFactory } from 'ngrx-data';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';

import { HeroModule } from './hero/hero.module';

@NgModule({
  declarations: [

    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeroModule,

    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
