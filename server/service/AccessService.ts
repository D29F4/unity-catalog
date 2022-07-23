import { getRepository } from 'typeorm';
//---------------------------------------------------------------------------
import dataSource from '../database/data-source';
//---------------------------------------------------------------------------
import { UserUpdateInterface, UserQueryInterface } from '../../shared/interface/access/User';
import { User } from '../database/entity/access/User';
//---------------------------------------------------------------------------
import { AbstractService } from './AbstractService';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 *  Service for privilege-control.
 */
class AccessService {

  UserRp = dataSource.getRepository(User);


  /**
   *  Get an individual user.
   *
   *  @param id - User ID
   *  @returns `User` | null
   */
  async userGet(id: number): Promise<User | null> {
    return await this.UserRp.findOneBy({ id: id });
  }



  /**
   *  Get users by search parameters.
   *
   *  @param req.body - Search parameters
   *  @returns `User`[] | null
   */
  //async getUsers(params: UserQueryInterface): Promise<User[]> {
  async usersGet(params: UserQueryInterface) {}



  /**
   *  Create a user.
   *
   *  @param submission - The new `User`.
   *  @returns `User`
   */
  async userCreate(submission: User): Promise<User> {
    //  Query for existing user
    const duplicate: User|null = await this.UserRp.findOneBy({
      username: submission.username,
    });
    if (duplicate) {
      //|FIX Handle error
    }

    const user: User|null = await this.UserRp.save(submission);

    return user;
  }



  /**
   *  Update a user.
   *
   *  @param submission - The `User` to be updated.
   *  @returns User ID
   */
  async userUpdate(submission: UserUpdateInterface): Promise<User> {

    //  Ensure existence of user
    const extantUser: User|null = await this.UserRp.findOneBy({
      id: submission.id,
    });
    if (!extantUser) {
      //|FIX Handle error
    }

    //  Update
    return await this.UserRp.save(submission);
  }



  /**
   *  Delete (that is: delete) a user.
   *
   *  @param id - The ID of the `User` to deactivate.
   *  @returns Boolean indicating success
   */
  async userDelete(id: number): Promise<boolean> {
    //  Make user inactive
    const result = await this.UserRp.update(id, { active: false });
    //|FIX
    return true;
  }

}


export default new AccessService();