import {
  Column,
  Entity as TypeOrmEntity,
  //JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectSubdivisionInterface } from '../../../../shared/interface/item/SubjectSubdivision';
import { Entity } from './Entity';
import { SubjectHeading } from './SubjectHeading';
import { SubjectSubdivisionMap } from './SubjectSubdivisionMap';
import { SubjectSubfield } from './SubjectSubfield';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@TypeOrmEntity({
  orderBy: { order: 'ASC' },
})
export class SubjectSubdivision implements SubjectSubdivisionInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SubjectSubfield, { nullable: false })
  //@JoinColumn({ name: 'subfield' })
  subfield: SubjectSubfield;

  @ManyToOne(() => SubjectHeading)
  //@JoinColumn({ name: 'heading' })
  heading: SubjectHeading;

  @ManyToOne(() => Entity)
  //@JoinColumn({ name: 'entity' })
  entity: Entity;

  @OneToMany(
    () => SubjectSubdivisionMap,
    (subjectSubdivisionMap: SubjectSubdivisionMap) =>
      subjectSubdivisionMap.subjectSubdivision
  )
  subjectSubdivisionMap: SubjectSubdivisionMap[];
}
