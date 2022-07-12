import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import ItemOwnershipFateInterface from '^interface/item/ItemOwnershipFate';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export default class ItemOwnershipFate implements ItemOwnershipFateInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
