import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rectangle, Marker } from 'leaflet';

const APIKEY = 'W6BEUAN7'

export interface What3WordsPoint {
  lng: number
  lat: number
}
export interface LatLngToWordsResponse {
  words: string
  bounds: {
    southwest: What3WordsPoint,
    northeast: What3WordsPoint
  }
  geometry: What3WordsPoint
  language: string
}
@Injectable({
  providedIn: 'root'
})
export class What3wordsService {

  constructor(private http: HttpClient) { }

  latlngToWords(lat, lng) {
    return this.http.get<LatLngToWordsResponse>(`https://api.what3words.com/v2/reverse?coords=${lat}%2C${lng}&key=${APIKEY}`).toPromise()
  }
}
