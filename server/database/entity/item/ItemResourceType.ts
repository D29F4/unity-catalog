import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
//---------------------------------------------------------------------------
import { ItemResourceTypeInterface } from '../../../../shared/interface/item/ItemResourceType';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { uid: 'ASC' },
})
@Unique(['uid'])
export class ItemResourceType implements ItemResourceTypeInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  uid: string;
}
