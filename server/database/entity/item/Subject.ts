import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import SubjectInterface from '^interface/item/Subject';
import Item from '^entity/item/Item';
import SubjectSubdivisionMap from '^entity/item/SubjectSubdivisionMap';


@Entity({
  orderBy: { order: 'ASC' },
})
export default class Subject implements SubjectInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unsigned: true,
    length: 2,
    nullable: false,
    default: 0,
  })
  order: number;

  @OneToMany(
    () => SubjectSubdivisionMap,
    (subjectSubdivisionMap) => subjectSubdivisionMap.subject
  )
  subjectSubdivisionMap: SubjectSubdivisionMap[];

  @ManyToOne(
    () => Item,
    (item) => item.subject,
    {nullable: false}
  )
  item: Item;
}
