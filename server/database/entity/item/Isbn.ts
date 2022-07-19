import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//---------------------------------------------------------------------------
import { IsbnInterface } from '^interface/item/Isbn';
import { Item } from '^entity/item/Item';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { isbn: 'ASC' },
})
@Unique(['isbn'])
export class Isbn implements IsbnInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, { nullable: false })
  @JoinColumn({ name: 'item' })
  item: Item;

  @Column({
    type: 'varchar',
    length: 60,
  })
  isbnFull: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  isbn: string;
}
