import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
//
import EventInterface from '^interface/general/Event';


@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['uid'])
export default class Event implements EventInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  uid: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  active: boolean;
}
