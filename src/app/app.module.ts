import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VisualizatorComponent } from './visualizator/visualizator.component';


@NgModule({
  declarations: [
    AppComponent,
    VisualizatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
