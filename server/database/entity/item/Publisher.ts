import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import PublisherInterface from '^interface/item/Publisher';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['name'])
export default class Publisher implements PublisherInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
