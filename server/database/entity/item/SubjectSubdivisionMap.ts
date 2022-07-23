import {
  Column,
  Entity,
  //JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectSubdivisionMapInterface } from '../../../../shared/interface/item/SubjectSubdivisionMap';
import { Subject } from './Subject';
import { SubjectSubdivision } from './SubjectSubdivision';
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
  //@JoinColumn({ name: 'subject' })
  subject: Subject;

  @ManyToOne(
    () => SubjectSubdivision,
    (subjectSubdivision: SubjectSubdivision) =>
      subjectSubdivision.subjectSubdivisionMap
  )
  subjectSubdivision: SubjectSubdivision;

  @Column({
    unsigned: true,
    nullable: false,
    default: 0,
  })
  order: number;
}
