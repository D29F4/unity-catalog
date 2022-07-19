import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//---------------------------------------------------------------------------
import { ItemOwnershipFateInterface } from '^interface/item/ItemOwnershipFate';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export class ItemOwnershipFate implements ItemOwnershipFateInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
