import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
//---------------------------------------------------------------------------
import { UserService } from '../../../../core/service/user.service';
import {
  UserCreateInterface,
  UserUpdateInterface,
} from '../../../../../../../../shared/interface/access/User';
import { User } from '../../../../../../../../server/database/entity/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) { }


  //  Form mode [0: read-only, 1: editing, 2: new]
  mode = 0;
  userForm!: FormGroup;
  waiting = false;
  userId: number = null;


  ngOnInit(): void {

    //  Form
    this.userForm = this.fb.group({
      username: [null, Validators.required],
      nameFirst: [null],
      nameLast: [null],
      nameMiddle: [null],
      emailAddress: [null, Validators.email],
      uri: [null],
    });

    //  Any user ID in the route
    this.userId = Number(this.route.snapshot.params['id']);

    //  Update the mode
    this.mode = this.userId ? 0 : 2;

    if (!this.mode) {
      this.userGet(this.userId);
      this.controlsToggle(false);
    }
  }


  get fc() {
    return this.userForm.controls;
  }


  /**
   *  Enable or disable all form controls
   */
  controlsToggle(enable = true) {
    Object.keys(this.fc).forEach((c) => {
      const control = this.userForm.controls[c];
      if (enable) {
        control.enable();
      } else {
        control.disable();
      }
    });
  }


  userEdit() {
    this.mode = 1;
    this.controlsToggle();
  }


  userGet(id: number) {
    this.waiting = true;
    this.userService
      .userGet(id)
      .subscribe((user: User) => {
        this.userForm.patchValue(user);
        this.waiting = false;
      });
  }


  userUpdate() {
    this.waiting = true;
    const submission = this.userForm.value as UserUpdateInterface;
    submission.id = this.userId;
    this.userService
      .userUpdate(submission)
      .subscribe((user: User) => {
        this.userForm.patchValue(user);
        this.waiting = false;
      });
  }


  userCreate() {
    this.waiting = true;
    this.userService
      .userCreate(this.userForm.value as UserCreateInterface)
      .subscribe((user: User) => {
        this.userForm.setValue(user);
        this.waiting = false;
      });
  }


  onSubmit() {
    if (this.mode === 1) {
      this.userUpdate();
    } else {
      this.userCreate();
    }
  }
}
