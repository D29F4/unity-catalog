import { Component, OnInit } from '@angular/core';
//---------------------------------------------------------------------------
import { AlertTypeEnum } from '../../../../../../shared/interface/general/AlertTypeEnum';
import { Alert, AlertType } from '../../core/model/Alert';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  alert: Alert;

  constructor() {}

  ngOnInit(): void { }
}
