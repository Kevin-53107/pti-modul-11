import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // import module reactive form
import { DataComponent } from './data.component';
import { CommonModule } from '@angular/common'; // taruhlah juga common module agar angular directive bisa dibaca oleh tag normal html seperti div, dll

@NgModule({
  declarations: [AppComponent, DataComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // taruh reactive form yang mau diimport
    CommonModule, // taruh commonmodule yang mau diinput
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
