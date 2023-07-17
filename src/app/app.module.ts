import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorItemComponent } from './components/atoms/color-item/color-item.component';
import { ColorListComponent } from './components/molecules/color-list/color-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorItemComponent,
    ColorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
