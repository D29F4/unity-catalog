import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import EntityTypeInterface from '^interface/item/EntityType';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export default class EntityType implements EntityTypeInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
