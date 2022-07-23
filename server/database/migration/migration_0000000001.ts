import { MigrationInterface, QueryRunner } from 'typeorm';
//---------------------------------------------------------------------------
import dataSource from '../../database/data-source';
//---------------------------------------------------------------------------
import { Event } from '../../database/entity/general/Event';
import { DataType } from '../../database/entity/general/DataType';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
 *  Seed general setup tables for application:
 *
 *    * DataType
 *    * Event
 */
export class Migration_0000000001 implements MigrationInterface {
  /**
   *  Migration: up
   */
  async up(queryRunner: QueryRunner): Promise<void> {
    /*
     *  Seed `DataType`.
     */
    let dataTypeSeeds = [
      ['Event', 'Event'],
      ['Item', 'Item'],
      ['ItemSource', 'Data source for items'],
      ['ItemUserData', 'User/item metadata'],
      ['ItemOwnershipFate', "Fate of user's item"],
      ['LccClass', 'LCC class'],
      ['LccSubclass', 'LCC subclass'],
      ['LogEntry', 'An entry in the application log'],
      ['User', 'User'],
    ];

    //  Repository
    const dataTypeRep = dataSource.getRepository(DataType);

    dataTypeSeeds.forEach(async (seed) => {
      const dataType = new DataType();

      dataType.uid = seed[0];
      dataType.name = seed[1];

      await dataTypeRep.insert(dataType);
    });

    /*
     *  Seed `Event`.
     */
    const eventSeeds = [
      ['create', 'Create'],
      ['delete', 'Delete'],
      ['download', 'Download'],
      ['logIn', 'Log in'],
      ['logOut', 'Log out'],
      ['update', 'Update'],
    ];

    //  Repository
    const eventRep = dataSource.getRepository(Event);

    eventSeeds.forEach(async (seed) => {
      const event = new Event();

      event.uid = seed[0];
      event.name = seed[1];

      await eventRep.insert(event);
    });
  }

  /**
   *  Migration: down
   */
  async down(queryRunner: QueryRunner): Promise<void> {
    //  Truncate tables
    await queryRunner.query('TRUNCATE TABLE `event`');
    await queryRunner.query('TRUNCATE TABLE `data_type`');
  }
}
