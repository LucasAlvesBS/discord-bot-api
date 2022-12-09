import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Member } from './member.entity';

@Entity({ name: 'inviters' })
export class Inviter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'guild_id', length: '50' })
  guildId: string;

  @Column({ name: 'user_id', length: '50', unique: true })
  userId: string;

  @Column({ name: 'total_invitations' })
  totalInvitations: number;

  @Column({ name: 'days_counter' })
  daysCounter: number;

  @Column({ name: 'invalid_account', default: false })
  invalidAccount: boolean;

  @OneToMany(() => Member, (members) => members.inviter)
  members: Member[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
