import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Rectangle, Marker, LatLng, LatLngBounds } from 'leaflet';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { What3wordsService } from '../services/what3words.service';
import { LeafletTileLayerDefinition } from '@asymmetrik/ngx-leaflet';

export class Plot extends Rectangle {
  words: string
  constructor(bounds, words) {
    super(bounds)
    this.words = words
    console.log(this)
  }
  equals(plot: Plot) {
    return this.words == plot.words
  }
}
@Component({
  selector: 'app-plot-select',
  templateUrl: './plot-select.component.html',
  styleUrls: ['./plot-select.component.scss']
})
export class PlotSelectComponent {

  @Output() plotSelect: EventEmitter<Plot> = new EventEmitter()
  @Output() plotRemove: EventEmitter<Plot> = new EventEmitter()
  @Input() layers: Array<Rectangle | Marker> = []

  zoom = 19
  center: LatLng = latLng(27.98785055124693, 86.92481792299078)

  mapBounds = new LatLngBounds([[-90, -180], [90, 180]])

  options = {
    layers: [
      tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png	', {
        minZoom: 2,
        maxZoom: 8,
        noWrap: true,
      }),
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        noWrap: true,
        bounds: this.mapBounds,
        minZoom: 9,
        maxZoom: 19, attribution: ''
      })
    ],
    zoom: 19,
    center: this.center
  };

  constructor(private what3words: What3wordsService) {
  }

  public centerPlot(plot) {
    this.center = plot._bounds._northEast
  }

  click(e: LeafletMouseEvent) {
    if (Math.abs(e.latlng.lat) > 90 || Math.abs(e.latlng.lng) > 180) {
      return;
    }
    this.what3words.latlngToWords(e.latlng.lat, e.latlng.lng)
      .then(words => {
        let plot = new Plot([[words.bounds.northeast.lat, words.bounds.northeast.lng],
        [words.bounds.southwest.lat, words.bounds.southwest.lng],
        ], words.words)
        this.plotSelect.emit(plot)
      })
  }

  ngOnInit() {
  }

}
