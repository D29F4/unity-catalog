import { getRepository } from 'typeorm';
//
import { dataSource } from '^database/data-source';
import { AbstractService } from '^service/AbstractService';
//
import { UserQueryInterface } from '^interface/access/User';
import User from '^entity/access/User';


/**
 *  Service for privilege-control.
 */
export class AccessService
{
  const UserRp = dataSource.getRepository(User);


  /**
   *  Get an individual user.
   *
   *  @param userId - User ID
   *  @returns `User` | null
   */
  async getUser(userId: number): Promise<UserInterface> {
    const user: User = await UserRp.findOneBy({ id: req.params.id });
    return user;
  }



  /**
   *  Get users by search parameters.
   *
   *  @param req.body - Search parameters
   *  @returns `User`[] | null
   */
  async getUsers(params: UserQueryInterface): Promise<UserInterface[]> {
  }



  /**
   *  Create a user.
   *
   *  @param submission - The new `User`.
   *  @returns `User`
   */
  async createUser(submission: User): Promise<UserInterface> {

    //  Query for existing user
    const duplicate: User = await UserRp.findOneBy({ username: submission.username });
    if (duplicate) {
      //|FIX Handle error
    }

    const user: User = await UserRp.save(submission);

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
    const extantUser: User = await UserRp.findOneBy({ id: submission.id });
    if (!extantUser) {
      //|FIX Handle error
    }

    //  Update
    const user: User = await UserRp.save(extantUser.id, submission);

    return user.id;
  }
}
