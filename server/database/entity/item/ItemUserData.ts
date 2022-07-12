import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import ItemUserDataInterface from '^interface/item/ItemUserData';
import Item from '^entity/item/Item';
import ItemOwnershipFate from '^entity/item/ItemOwnershipFate';
import User from '^entity/access/User';


@Entity()
export default class ItemUserData implements ItemUserDataInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Item)
  @JoinColumn()
  item: Item;

  @Column()
  ownershipStartDt: Date;

  @Column()
  ownershipEndDt: Date;

  @Column({
    nullable: false,
    default: false,
  })
  isOwned: boolean;

  @ManyToOne(
    () => ItemOwnershipFate,
    (itemOwnershipFate) => itemOwnershipFate.itemUserData
  )
  fate?: ItemOwnershipFate;

  @Column()
  volumes: string;

  @Column()
  notes: string;

  @Column()
  updatedDttm: Date;
}
