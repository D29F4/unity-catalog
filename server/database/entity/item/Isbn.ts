import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//---------------------------------------------------------------------------
import { IsbnInterface } from '../../../../shared/interface/item/Isbn';
import { Item } from './Item';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { isbn: 'ASC' },
})
@Unique(['isbn'])
export class Isbn implements IsbnInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Item,
    { nullable: false }
  )
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
