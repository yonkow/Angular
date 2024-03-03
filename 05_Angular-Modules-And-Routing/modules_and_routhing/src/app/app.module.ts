import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouthingModule } from './app-routhing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouthingModule, BrowserAnimationsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
