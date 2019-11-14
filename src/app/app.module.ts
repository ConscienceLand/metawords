import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule, MatListModule, MatSelectModule, MatDivider, MatDividerModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotSelectComponent } from './plot-select/plot-select.component';
import { HttpClientModule } from '@angular/common/http';
import { PlotSelectItemComponent } from './plot-select-item/plot-select-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PlotSelectComponent,
    PlotSelectItemComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    LeafletModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
