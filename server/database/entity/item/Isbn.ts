import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import IsbnInterface from '^interface/item/Isbn';
import Item from '^entity/item/Item';


@Entity({
  orderBy: { isbn: 'ASC' },
})
@Unique(['isbn'])
export default class Isbn implements IsbnInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Item,
    (item) => item.isbn,
    {nullable: false}
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
