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
import { ItemUserDataInterface } from '^interface/item/ItemUserData';
import { Item } from '^entity/item/Item';
import { ItemOwnershipFate } from '^entity/item/ItemOwnershipFate';
import { User } from '^entity/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity()
export class ItemUserData implements ItemUserDataInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Item)
  @JoinColumn()
  item: Item;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  ownershipStartDt: Date;

  @Column()
  ownershipEndDt: Date;

  @Column({
    nullable: false,
    default: false,
  })
  owned: boolean;

  @ManyToOne(() => ItemOwnershipFate)
  @JoinColumn({ name: 'fate' })
  fate?: ItemOwnershipFate;

  @Column()
  volumes: string;

  @Column()
  notes: string;

  @Column()
  uri: JSON;

  @Column()
  updatedDttm: Date;
}
