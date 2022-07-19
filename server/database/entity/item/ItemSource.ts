import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { ItemSourceInterface } from '^interface/item/ItemSource';
import { Item } from '^entity/item/Item';
import { ItemSchema } from '^entity/item/ItemSchema';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: {
    name: 'ASC',
  },
})
@Unique(['name'])
export class ItemSource implements ItemSourceInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string | null;

  @Column()
  uriHome: string | null;

  @Column()
  uriApiDoc: string | null;

  @Column()
  uriApiBase: string | null;

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

  @ManyToOne(() => ItemSchema, { nullable: false })
  @JoinColumn({ name: 'itemSchema' })
  itemSchema: ItemSchema;

  @OneToMany(() => Item, (item: Item) => item.source)
  item: Item[];
}
