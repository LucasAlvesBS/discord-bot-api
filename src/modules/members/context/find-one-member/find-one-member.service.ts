import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '@shared/entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneMemberService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepository: Repository<Member>,
  ) {}

  async execute(id: string) {
    const member = await this.membersRepository
      .createQueryBuilder('member')
      .leftJoinAndSelect('member.inviter', 'inviter')
      .select([
        'member.id',
        'member.guildId',
        'member.userId',
        'member.createdAt',
        'inviter.id',
        'inviter.guildId',
        'inviter.userId',
        'inviter.totalInvitations',
        'inviter.daysCounter',
        'inviter.invalidAccount',
      ])
      .where('member.id = :id', { id: id })
      .getOne();

    checkExistence(member);

    return member;
  }
}
