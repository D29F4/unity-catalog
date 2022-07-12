import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
//
import ItemSourceInterface from '^interface/item/ItemSource';
import ItemSchema from '^entity/item/ItemSchema';


@Entity({
  orderBy: {
    name: 'ASC',
  },
})
@Unique(['name'])
export default class ItemSource implements ItemSourceInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;

  @Column()
  uriHome: string;

  @Column()
  uriApiDoc: string;

  @Column()
  uriApiBase: string;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;

  @Column({
    nullable: false,
    default: true,
  })
  itemsActive: boolean;

  @CreateDateColumn()
  createDttm: Date;

  @UpdateDateColumn()
  updateDttm: Date;

  @ManyToOne(
    () => ItemSchema,
    (itemSchema) => itemSchema.itemSource,
    {nullable: false},
  )
  itemSchema: ItemSchema;
}
