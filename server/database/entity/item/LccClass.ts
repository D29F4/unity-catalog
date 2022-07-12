import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import LccClassInterface from '^interface/item/LccClass';
import LccSubclass from '^entity/item/LccSubclass';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export default class LccClass implements LccClassInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 4 })
  name: string;

  @Column()
  description: string;

  @OneToMany(
    () => LccSubclass,
    (lccSubclass) => lccSubclass.lccClass
  )
  lccSubclass: LccSubclass[];
}