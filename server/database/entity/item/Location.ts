import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
//---------------------------------------------------------------------------
import { LocationInterface } from '../../../../shared/interface/item/Location';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export class Location implements LocationInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
