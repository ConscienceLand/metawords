import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Plot } from './plot-select/plot-select.component';
import { Rectangle, Marker } from 'leaflet';
import * as _ from 'lodash'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'metawords';
  layers: Array<Plot | Marker> = []

  constructor() {
  }

  removePlot(plot: Plot) {
    this.layers = _.filter(this.layers, function (o) { return o.words !== plot.words; });
  }
  selectPlot(plot: Plot) {
    const startLength = this.layers.length
    this.layers = _.filter(this.layers, function (o) { return o.words !== plot.words; });
    if (startLength == this.layers.length) {
      this.layers.push(plot)
    }
  }
}
