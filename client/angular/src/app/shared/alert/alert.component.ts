import { Component, OnInit } from '@angular/core';
import AlertTypeEnum from '^interface/AlertTypeEnum';
import AlertTypeInterface from '^interface/AlertType';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  //  Attributes of the alert
  alertType!: AlertTypeInterface;
  dismissable: boolean = true;
  content: string = '';

  constructor() {}

  ngOnInit(): void {
    this.alertType = {
      type: AlertTypeEnum.Danger,
      altText: 'This is a warning',
    };
    this.dismissable = true;
    this.content = 'This is text.';
  }
}
