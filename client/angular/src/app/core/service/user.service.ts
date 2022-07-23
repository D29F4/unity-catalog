import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//---------------------------------------------------------------------------
import { AbstractService } from './abstract.service';
//---------------------------------------------------------------------------
import { UserInterface, UserQueryInterface } from '../../../../../../shared/interface/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


@Injectable({
  providedIn: 'root',
})
export class UserService extends AbstractService {

  constructor(protected http: HttpClient) {
    super();
  }

  path = [this.uriApiBase, 'access'].join('/');


  /** Get an individual user. */
  userGet(id: number): Observable<any> {
    return this.http.get(`${this.path}/user/${id}`);
  }

  /** Get users by search parameters. */
  usersGet(params: UserQueryInterface): Observable<any> {
    return this.http.get(`${this.path}/user`);
  }

  /** Update a user. */
  userUpdate(user: any): Observable<any> {
    return this.http.put(`${this.path}/user`, user);
  }

  /** Create a user. */
  userCreate(user: any): Observable<any> {
    return this.http.post(`${this.path}/user`, user);
  }
}
