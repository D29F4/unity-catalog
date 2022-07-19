import { getRepository } from 'typeorm';
//---------------------------------------------------------------------------
import dataSource from '^database/data-source';
//---------------------------------------------------------------------------
import { UserQueryInterface } from '^interface/access/User';
import { User } from '^entity/access/User';
//---------------------------------------------------------------------------
import { AbstractService } from '^service/AbstractService';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  Service for privilege-control.
 */
export default class AccessService {
  UserRp = dataSource.getRepository(User);

  /**
   *  Get an individual user.
   *
   *  @param userId - User ID
   *  @returns `User` | null
   */
  async getUser(userId: number): Promise<User | null> {
    const user: User | null = await this.UserRp.findOneBy({ id: userId });
    return user;
  }

  /**
   *  Get users by search parameters.
   *
   *  @param req.body - Search parameters
   *  @returns `User`[] | null
   */
  //async getUsers(params: UserQueryInterface): Promise<User[]> {
  async getUsers(params: UserQueryInterface) {}

  /**
   *  Create a user.
   *
   *  @param submission - The new `User`.
   *  @returns `User`
   */
  async createUser(submission: User): Promise<User> {
    //  Query for existing user
    const duplicate = await this.UserRp.findOneBy({
      username: submission.username,
    });
    if (duplicate) {
      //|FIX Handle error
    }

    const user: User | null = await this.UserRp.save(submission);

    return user;
  }

  /**
   *  Update a user.
   *
   *  @param submission - The `User` to be updated.
   *  @returns User ID
   */
  async updateUser(submission: User): Promise<number> {
    //  Ensure existence of user
    const extantUser: User | null = await this.UserRp.findOneBy({
      id: submission.id,
    });
    if (!extantUser) {
      //|FIX Handle error
    }

    //  Update
    const user = await this.UserRp.save(submission);

    return user.id;
  }
}
