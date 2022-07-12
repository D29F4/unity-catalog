import { MigrationInterface, QueryRunner } from 'typeorm'
//
import { dataSource } from '^database/data-source';
//
import ItemOwnershipFate from '^entity/item/ItemOwnershipFate';
import ItemSchema from '^entity/item/ItemSchema';
import ItemSource from '^entity/item/ItemSource';


/**
 *  Seed setup tables for entities related specifically to `Item`s:
 *
 *    * ItemOwnershipFate
 *    * ItemSchema
 *    * ItemSource
 */
export class Migration_0000000002 implements MigrationInterface {

  /**
   *  Migration: up
   */
  async up(queryRunner: QueryRunner): Promise<void> {

    /*
     *  Seed `ItemOwnershipFate`.
     */
    const fateSeeds = [
      ['Donated'],
      ['Given away'],
      ['Lost/missing'],
      ['Recycled'],
      ['Sold'],
      ['Stolen'],
      ['Threw into ocean or fire'],
    ];

    //  Repository
    const fateRep = dataSource.getRepository(ItemOwnershipFate);

    //  Insert
    fateSeeds.forEach((seed) => {
      const fate = new ItemOwnershipFate();

      fate.name = seed[0];

      await fateRep.insert(fate);
    });


    /*
     *  Seed `ItemSchema`.
     */
    const schemaSeeds = [
      ['mods', 'MODS', 'Metadata Object Description Schema'],
    ];

    //  Repository
    const schemaRep = dataSource.getRepository(ItemSchema);

    //  Insert
    schemaSeeds.forEach((seed) => {
      const schema = new ItemSchema();

      schema.uid = seed[0];
      schema.name = seed[1];
      schema.description = seed[2];

      await schemaRep.insert(schema);
    });


    /*
     *  Seed `ItemSource`.
     */
    const sourceSeeds = [
      [
        'User (manual MODS entry)',
        null,
        null,
        null,
        null,
        'mods',
      ],
      [
        'Library of Congress',
        null,
        'https://catalog.loc.gov/',
        'https://www.loc.gov/apis/',
        'http://lx2.loc.gov:210/lcdb',
        'mods',
      ],
      [
        'Library Hub Discover',
        'Jisc: Library Hub Discover',
        'https://discover.libraryhub.jisc.ac.uk/',
        'https://discover.libraryhub.jisc.ac.uk/support/api/',
        'https://discover.libraryhub.jisc.ac.uk/sru-api',
        'mods',
      ],
      [
        'Harvard Library: LibraryCloud',
        null,
        'https://library.harvard.edu/',
        'https://wiki.harvard.edu/confluence/display/LibraryStaffDoc/LibraryCloud+APIs',
        'https://api.lib.harvard.edu/v2/items',
        'mods',
      ],
    ];

    //  Repository
    const itemSourceRep = dataSource.getRepository(ItemSource);

    //  Insert
    sourceSeeds.forEach((seed) => {
      const itemSource = new ItemSource();

      itemSource.name = seed[0];
      itemSource.description = seed[1];
      itemSource.uriHome = seed[2];
      itemSource.uriApiDoc = seed[3];
      itemSource.uriApiBase = seed[4];
      itemSource.itemSchema = schemaRep.findOne({ uid: seed[5] });

      await itemSourceRep.insert(itemSource);
    });
  }



  /**
   *  Migration: down
   */
  async down(queryRunner: QueryRunner): Promise<void> {

    //  Truncate tables
    await queryRunner.query(
      'TRUNCATE TABLE `item_source`',
    );
    await queryRunner.query(
      'TRUNCATE TABLE `item_schema`',
    );
    await queryRunner.query(
      'TRUNCATE TABLE `item_ownership_fate`',
    );
  }
}
