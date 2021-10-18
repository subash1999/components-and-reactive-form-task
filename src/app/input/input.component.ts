import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() btnClickedEvent = new EventEmitter<any>();
  number = ""

  constructor() { }

  ngOnInit(): void {
  }

  clickButton(){
    this.btnClickedEvent.emit(this.number);
  }

}
