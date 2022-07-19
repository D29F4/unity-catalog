import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
//---------------------------------------------------------------------------
import { UserInterface } from '^interface/access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@Entity({
  orderBy: {
    nameLast: 'ASC',
    nameFirst: 'ASC',
    nameMiddle: 'ASC',
    username: 'ASC',
  },
})
@Unique(['username'])
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  username: string;

  @Column()
  nameFirst: string;

  @Column()
  nameLast: string;

  @Column()
  nameMiddle: string;

  @Column()
  emailAddress: string;

  @Column()
  uri: string;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createDttm: Date;

  @ManyToOne(() => User, (user: User) => user.createUser)
  createUser: User;

  @UpdateDateColumn()
  updateDttm: Date;

  @ManyToOne(() => User, (user: User) => user.updateUser)
  updateUser: User;

  @Column()
  deactivateDttm: Date;

  @ManyToOne(() => User, (user: User) => user.deactivateUser)
  deactivateUser: User;
}
