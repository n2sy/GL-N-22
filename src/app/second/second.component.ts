import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  @Input() cl = 'yellow';
  @Output() msgToFirst = new EventEmitter();
  @Output() msgToFirst2 = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendMsg() {
    this.msgToFirst.emit("Message de la part de l'enfant");
  }
  sendMsg2() {
    this.msgToFirst.emit(13);
  }
}
