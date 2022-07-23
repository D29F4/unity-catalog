import {
  Column,
  CreateDateColumn,
  Entity,
  //JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { LogEntryInterface } from '../../../../shared/interface/general/LogEntry';
import { DataType } from './DataType';
import { Event } from './Event';
import { User } from '../access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { eventDttm: 'ASC' },
})
export class LogEntry implements LogEntryInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, { nullable: false })
  //@JoinColumn({ name: 'event' })
  event: Event;

  @ManyToOne(() => DataType)
  //@JoinColumn({ name: 'data_type' })
  dataType: DataType;

  @Column({ unsigned: true })
  operandId: number;

  @Column({
    type: 'json',
    nullable: true,
    default: null,
  })
  detail: string;
  //detail: { label: string; content: string }[]; //|FIX

  @Column({
    nullable: true,
    default: null,
  })
  comment: string;

  @ManyToOne(() => User, { nullable: true })
  //@JoinColumn({ name: 'user' })
  user: User | null;

  @CreateDateColumn()
  eventDttm: Date;
}
