import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//---------------------------------------------------------------------------
import { DataTypeInterface } from '../../../../shared/interface/general/DataType';
import { LogEntry } from './LogEntry';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: { name: 'ASC' },
})
export class DataType implements DataTypeInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  uid: string;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;
}
