import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { AbstractItemInterface } from '^interface/item/AbstractItem';
import { ItemResourceType } from '^entity/item/ItemResourceType';
import { ItemSource } from '^entity/item/ItemSource';
import { User } from '^entity/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity()
export abstract class AbstractItem implements AbstractItemInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ItemResourceType, { nullable: false })
  @JoinColumn({ name: 'resourceType' })
  resourceType: ItemResourceType;

  @ManyToOne(() => ItemSource, (itemSource) => itemSource.item, {
    nullable: false,
  })
  source: ItemSource;

  @CreateDateColumn()
  createDttm: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'createUser' })
  createUser: User;

  @UpdateDateColumn()
  updateDttm: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updateUser' })
  updateUser: User;
}
