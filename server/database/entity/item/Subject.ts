import {
  Column,
  Entity,
  //JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectInterface } from '../../../../shared/interface/item/Subject';
import { Item } from './Item';
import { SubjectSubdivisionMap } from './SubjectSubdivisionMap';
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
  //@JoinColumn({ name: 'item' })
  item: Item;

  @Column({
    unsigned: true,
    nullable: false,
    default: 0,
  })
  order: number;
}
