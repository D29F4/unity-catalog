import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//
import { AbstractService } from '^service/AbstractService';
//
import { UserInterface, UserQueryInterface } from '^interface/access/Item';


@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService
{
  constructor(
    protected http: HttpClient
  ) { }

  const path = this.apiPathComponents.concat(['access']).join('/');

  /** Get an individual user. */
  getUser(id: number): Observable<any> {
    return this.http.get(`${path}/user/:id`);
  };

  /** Get users by search parameters. */
  getUsers(params: UserQueryInterface): Observable<any> {
    return this.http.get(`${path}/user`);
  };

  /** Create a user. */
  createUser(user: UserInterface): Observable<any> {
    return this.http.post(`${path}/user`, user);
  };

  /** Update a user. */
  updateUser(user: UserInterface): Observable<any> {
    return this.http.get(`${path}/user`, user);
  };
}
