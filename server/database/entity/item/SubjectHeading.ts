import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
//---------------------------------------------------------------------------
import { SubjectHeadingInterface } from '../../../../shared/interface/item/SubjectHeading';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export class SubjectHeading implements SubjectHeadingInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
