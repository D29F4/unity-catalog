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
import { ItemUserDataInterface } from '../../../../shared/interface/item/ItemUserData';
import { Item } from './Item';
import { ItemOwnershipFate } from './ItemOwnershipFate';
import { User } from '../access/User';
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
  //@JoinColumn({ name: 'fate' })
  fate?: ItemOwnershipFate;

  @Column()
  volumes: string;

  @Column()
  notes: string;

  @Column('json')
  uri: string;

  @Column()
  updatedDttm: Date;
}
