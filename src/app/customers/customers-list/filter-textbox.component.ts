import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// another way: Filer: <input type="text" [value]="filter" (input)="filter=$event.target.value">
@Component({
  selector: 'filter-textbox',
  template: `
    Filer: <input type="text" [(ngModel)]="filter">
  `
})

export class FilterTextboxComponent implements OnInit {

  private _filter: string;

  // we use Input() to take data in and update a local variable (_filter)
  // here we are using getters/setters from ES6
  @Input() 
  get filter() {
      return this._filter;
  }
  
  set filter(val: string) { 
      this._filter = val;
      this.changed.emit(this.filter); //Raise changed event
  }

  // we emit data back to the parent using Output()
  @Output() 
  changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }

}
