import { setLimit } from '@helpers/functions/set-limit.function';
import { setPage } from '@helpers/functions/set-page.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '@shared/entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllMembersService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepository: Repository<Member>,
  ) {}

  async execute(page: number, limit: number) {
    limit = setLimit(limit);
    page = setPage(page);

    const members = await this.membersRepository
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
      .skip(limit * (page - 1))
      .take(limit)
      .orderBy('member.createdAt', 'DESC')
      .getMany();

    const totalMembers = await this.membersRepository.count();
    const size = members.length;

    return { page, size, totalMembers, members };
  }
}
