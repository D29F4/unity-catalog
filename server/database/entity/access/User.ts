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
import { UserInterface } from '../../../../shared/interface/access/User';
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

  @Column({ default: null })
  nameLast: string;

  @Column({ default: null })
  nameFirst: string;

  @Column({ default: null })
  nameMiddle: string;

  @Column({ default: null })
  emailAddress: string;

  @Column({ default: null })
  uri: string;

  @Column({
    nullable: false,
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createDttm: Date;

  @ManyToOne(
    () => User,
    (user: User) => user.createUser
  )
  createUser: User;

  @UpdateDateColumn({ default: null })
  updateDttm: Date;

  @ManyToOne(
    () => User,
    (user: User) => user.updateUser
  )
  updateUser: User;

  @Column({ default: null })
  deactivateDttm: Date;

  @ManyToOne(
    () => User,
    (user: User) => user.deactivateUser
  )
  deactivateUser: User;
}
