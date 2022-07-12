import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import SubjectSubdivisionInterface from '^interface/item/SubjectSubdivision';
import Entity from '^entity/item/Entity';
import SubjectHeading from '^entity/item/SubjectHeading';
import SubjectSubdivisionMap from '^entity/item/SubjectSubdivisionMap';
import SubjectSubfield from '^entity/item/SubjectSubfield';


@Entity({
  orderBy: { order: 'ASC' },
})
export default class SubjectSubdivision implements SubjectSubdivisionInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => SubjectSubfield,
    (subfield) => subfield.subjectSubdivision,
    {nullable: false}
  )
  subfield: SubjectSubfield;

  @ManyToOne(
    () => SubjectHeading,
    (heading) => heading.subjectSubdivision
  )
  heading: SubjectHeading;

  @ManyToOne(
    () => Entity,
    (entity) => entity.subjectSubdivision
  )
  entity: Entity;

  @OneToMany(
    () => SubjectSubdivisionMap,
    (subjectSubdivisionMap) => subjectSubdivisionMap.subjectSubdivision
  )
  subjectSubdivisionMap: SubjectSubdivisionMap[];
}
