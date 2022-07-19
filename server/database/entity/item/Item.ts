import { Column, Entity, ManyToOne } from 'typeorm';
//---------------------------------------------------------------------------
import { ItemInterface } from '^interface/item/Item';
import { AbstractItem } from '^entity/item/AbstractItem';
import { LccClass } from '^entity/item/LccClass';
import { LccSubclass } from '^entity/item/LccSubclass';
import { Location } from '^entity/item/Location';
import { Publisher } from '^entity/item/Publisher';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity()
export class Item extends AbstractItem implements ItemInterface {
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

  @Column()
  titleAlt: JSON;

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
}
