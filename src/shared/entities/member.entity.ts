import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Inviter } from './inviter.entity';

@Entity({ name: 'members' })
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'guild_id', length: '50' })
  guildId: string;

  @Column({ name: 'user_id', length: '50', unique: true })
  userId: string;

  @ManyToOne(() => Inviter, (inviter) => inviter.members, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'inviter_id' })
  inviter: Inviter;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
