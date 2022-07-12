import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import Subject from '^entity/item/Subject';
import SubjectSubdivision from '^entity/item/SubjectSubdivision';


/**
 *  The entity associating `Subject`s and `SubjectSubdivision`s.
 *
 *  Creating this explicitly (and not using TypeORM's native ManyToMany()
 *  functionality) in order to define the custom `order` column.
 */
@Entity({
  orderBy: { order: 'ASC' },
})
export default class SubjectSubdivisionMap // implements SubjectSubdivisionMapInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unsigned: true,
  })
  subjectId: number;

  @Column({
    unsigned: true,
  })
  subjectSubdivisionId: number;

  @Column({
    unsigned: true,
    length: 2,
    nullable: false,
    default: 0,
  })
  order: number;

  @ManyToOne(
    () => Subject,
    (subject) => subject.subjectSubdivisionMap
  )
  subject: Subject;

  @ManyToOne(
    () => SubjectSubdivision,
    (subjectSubdivision) => subjectSubdivision.subjectSubdivisionMap
  )
  subjectSubdivision: SubjectSubdivision;
}
