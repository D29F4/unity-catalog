import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectSubfieldInterface } from '^interface/item/SubjectSubfield';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name', 'isEntity'])
export class SubjectSubfield implements SubjectSubfieldInterface {
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
