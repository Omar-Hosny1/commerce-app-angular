import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css'],
})
export class AlertMessageComponent implements OnInit {
  @Output() closeAlert = new EventEmitter<any>();
  @Input() message: string;
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closeAlert.emit();
  }
}
