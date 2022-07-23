import {
  Column,
  Entity,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { ItemInterface } from '../../../../shared/interface/item/Item';
import { Isbn } from './Isbn';
import { ItemResourceType } from './ItemResourceType';
import { ItemSource } from './ItemSource';
import { LccClass } from './LccClass';
import { LccSubclass } from './LccSubclass';
import { Location } from './Location';
import { Publisher } from './Publisher';
import { User } from '../access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity()
export class Item implements ItemInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => ItemResourceType,
    { nullable: false }
  )
  resourceType: ItemResourceType;

  @ManyToOne(
    () => ItemSource,
    (itemSource) => itemSource.item,
    { nullable: false }
  )
  source: ItemSource;

  @Column()
  lccn: string;

  @Column()
  oclc: string;

  //  lccClass: LccClass;

  //  lccSubclass: LccSubclass;

  @Column()
  lcc: string;

  @Column()
  ddc: string;

  @Column()
  nonsort: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  titleUniform: string;

  @Column('json')
  titleAlt: string;

  @Column()
  statementOfResponsibility: string;

  @Column()
  dateIssuedFull: string;

  @Column()
  dateIssued: number;

  @Column()
  edition: string;

  @Column()
  extent: string;

  //  publisher: Publisher;

  //  location: Location;

  @OneToMany(
    () => Isbn,
    (isbn: Isbn) => isbn.item
  )
  isbn: Isbn[];

  @CreateDateColumn()
  createDttm: Date;

  @ManyToOne(() => User)
  createUser: User;

  @UpdateDateColumn()
  updateDttm: Date;

  @ManyToOne(() => User)
  updateUser: User;
}
