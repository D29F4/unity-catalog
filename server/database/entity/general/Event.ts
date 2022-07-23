import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
//---------------------------------------------------------------------------
import { EventInterface } from '../../../../shared/interface/general/Event';
import { LogEntry } from './LogEntry';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
@Unique(['uid'])
export class Event implements EventInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  uid: string;

  @Column({ nullable: false })
  name: string;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;
}
