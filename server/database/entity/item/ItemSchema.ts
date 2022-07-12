import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import ItemSchemaInterface from '^interface/item/ItemSchema';
import ItemSource from '^entity/item/Item';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['uid', 'name'])
export default class ItemSchema implements ItemSchemaInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  uid: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;
}
