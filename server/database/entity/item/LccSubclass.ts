import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import LccSubclassInterface from '^interface/item/LccClass';
import LccClass from '^entity/item/LccClass';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export default class LccSubclass implements LccSubclassInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 6,
    nullable: false,
  })
  name: string;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(
    () => LccClass,
    (lccClass) => lccClass.lccSubclass,
    {nullable: false}
  )
  lccClass: LccClass;
}
