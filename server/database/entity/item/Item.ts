import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import ItemInterface from '^interface/item/Item';


@Entity()
export class Item implements ItemInterface
{
  @PrimaryGeneratedColumn()
  id: number;




}
