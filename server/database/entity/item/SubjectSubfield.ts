import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import SubjectSubfieldInterface from '^interface/item/SubjectSubfield';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name', 'isEntity'])
export default class SubjectSubfield implements SubjectSubfieldInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({
    nullable: false,
    default: false,
  })
  isEntity: boolean;
}
