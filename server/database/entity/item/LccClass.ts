import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//---------------------------------------------------------------------------
import { LccClassInterface } from '../../../../shared/interface/item/LccClass';
import { LccSubclass } from './LccSubclass';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export class LccClass implements LccClassInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 4
  })
  name: string;

  @Column()
  description: string;

  @OneToMany(
    () => LccSubclass,
    (lccSubclass: LccSubclass) => lccSubclass.lccClass
  )
  lccSubclass: LccSubclass[];
}
