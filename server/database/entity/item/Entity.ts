import {
  Column,
  Entity as TypeOrmEntity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//---------------------------------------------------------------------------
import { EntityInterface } from '^interface/item/Entity';
import { EntityType } from '^entity/item/EntityType';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@TypeOrmEntity({
  orderBy: {
    name: 'ASC',
    dates: 'ASC',
  },
})
@Unique(['name', 'dates'])
export class Entity implements EntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  dates: string;

  @Column()
  ldsId: string;

  @Column()
  viafId: string;

  @Column({
    unsigned: true,
    default: null,
  })
  instance: number;

  @ManyToOne(() => EntityType)
  @JoinColumn({ name: 'entityType' })
  entityType: EntityType;
}
