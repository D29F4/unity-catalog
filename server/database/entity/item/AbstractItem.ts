import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
//
import AbstractItemInterface from '^interface/item/AbstractItem';
import ItemResourceType from '^entity/item/ItemResourceType';
import ItemSource from '^entity/item/ItemSource';
import User from '^entity/access/User';


@Entity()
export default abstract class AbstractItem implements AbstractItemInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => ItemType,
    (itemResourceType) => itemResourceType.item,
    { nullable: false }
  )
  resourceType: ItemResourceType;

  @ManyToOne(
    () => ItemSource,
    (itemSource) => itemSource.item,
    { nullable: false }
  )
  source: ItemSource;

  @CreateDateColumn()
  createDttm: Date;

  @ManyToOne(
    () => User,
    (user) => user.itemsCreated
  )
  createUser: User;

  @UpdateDateColumn()
  updateDttm: Date;

  @ManyToOne(
    () => User,
    (user) => user.itemsUpdated
  )
  updateUser: User;
}
