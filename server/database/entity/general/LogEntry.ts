import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import { LogEntryInterface } from '^interface/general/LogEntry';
import DataType from '^entity/general/DataType';
import Event from '^entity/general/Event';
import User from '^entity/general/User';


@Entity({
  orderBy: { eventDttm: 'ASC' },
})
@Unique()
export default class LogEntry implements LogEntryInterface
{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Event,
    (event) => event.logEntry,
    {nullable: false}
  )
  event: Event;

  @ManyToOne(
    () => DataType,
    (dataType) => dataType.logEntry
  )
  dataType: DataType;

  @Column({ unsigned: true })
  operandId: number;

  @Column()
  detail: JSON;

  @Column()
  comment: string;

  @ManyToOne(
    () => User,
    (user) => user.logEntry
  )
  user: User;

  @CreateDateColumn()
  eventDttm: Date;
}
