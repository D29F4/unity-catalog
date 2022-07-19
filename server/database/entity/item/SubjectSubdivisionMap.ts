import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectSubdivisionMapInterface } from '^interface/item/SubjectSubdivisionMap';
import { Subject } from '^entity/item/Subject';
import { SubjectSubdivision } from '^entity/item/SubjectSubdivision';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  The entity associating `Subject`s and `SubjectSubdivision`s.
 *
 *  Creating this explicitly (and not using TypeORM's native ManyToMany()
 *  functionality) in order to define the custom `order` column.
 */
@Entity({
  orderBy: { order: 'ASC' },
})
export class SubjectSubdivisionMap implements SubjectSubdivisionMapInterface {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({
  //   unsigned: true,
  // })
  // subjectId: number;

  // @Column({
  //   unsigned: true,
  // })
  // subjectSubdivisionId: number;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject' })
  subject: Subject;

  @ManyToOne(
    () => SubjectSubdivision,
    (subjectSubdivision: SubjectSubdivision) =>
      subjectSubdivision.subjectSubdivisionMap
  )
  subjectSubdivision: SubjectSubdivision;

  @Column({
    unsigned: true,
    length: 2,
    nullable: false,
    default: 0,
  })
  order: number;
}
