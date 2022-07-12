import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
//
import DataTypeInterface from '^interface/general/DataType';


@Entity({
  orderBy: { name: 'ASC' },
})
export default class DataType implements DataTypeInterface
{
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

  @Column({ nullable: false })
  active: boolean;
}
