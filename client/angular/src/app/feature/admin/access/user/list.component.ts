import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//---------------------------------------------------------------------------
import { UserService } from '../../../../core/service/user.service';
import { UserInterface } from '../../../../../../../../shared/interface/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {

  ngOnInit(): void {

  }
}
