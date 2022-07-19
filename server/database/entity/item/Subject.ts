import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectInterface } from '^interface/item/Subject';
import { Item } from '^entity/item/Item';
import { SubjectSubdivisionMap } from '^entity/item/SubjectSubdivisionMap';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { order: 'ASC' },
})
export class Subject implements SubjectInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => SubjectSubdivisionMap,
    (subjectSubdivisionMap: SubjectSubdivisionMap) =>
      subjectSubdivisionMap.subject
  )
  subjectSubdivisionMap: SubjectSubdivisionMap[];

  @ManyToOne(() => Item, { nullable: false })
  @JoinColumn({ name: 'item' })
  item: Item;

  @Column({
    unsigned: true,
    length: 2,
    nullable: false,
    default: 0,
  })
  order: number;
}
