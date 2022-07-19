import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { LogEntryInterface } from '^interface/general/LogEntry';
import { DataType } from '^entity/general/DataType';
import { Event } from '^entity/general/Event';
import { User } from '^entity/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { eventDttm: 'ASC' },
})
export class LogEntry implements LogEntryInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, { nullable: false })
  @JoinColumn({ name: 'event' })
  event: Event;

  @ManyToOne(() => DataType)
  @JoinColumn({ name: 'dataType' })
  dataType: DataType;

  @Column({ unsigned: true })
  operandId: number;

  @Column()
  detail: { label: string; content: string }[];

  @Column()
  comment: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user' })
  user: User | null;

  @CreateDateColumn()
  eventDttm: Date;
}
