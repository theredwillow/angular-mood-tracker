import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeafMoodtrackerComponent } from './leaf-moodtracker/leaf-moodtracker.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafMoodtrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
