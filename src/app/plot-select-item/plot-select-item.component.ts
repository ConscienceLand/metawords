import { Component, OnInit, ElementRef, ChangeDetectorRef, Input } from '@angular/core';
import { MatListItem, MatNavList, MatList } from '@angular/material';
import { Plot } from '../plot-select/plot-select.component';

@Component({
  selector: 'app-plot-select-item',
  templateUrl: './plot-select-item.component.html',
  styleUrls: ['./plot-select-item.component.scss']
})
export class PlotSelectItemComponent extends MatListItem {

  @Input() plot: Plot

  constructor(_element: ElementRef<HTMLElement>, navList?: MatNavList, list?: MatList, _changeDetectorRef?: ChangeDetectorRef) {
    super(_element, navList, list, _changeDetectorRef)
  }

}
