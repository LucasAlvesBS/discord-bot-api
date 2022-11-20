import { setLimit } from '@helpers/functions/set-limit.function';
import { setPage } from '@helpers/functions/set-page.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inviter } from '@shared/entities/inviter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllInvitersService {
  constructor(
    @InjectRepository(Inviter)
    private readonly invitersRepository: Repository<Inviter>,
  ) {}

  async execute(page: number, limit: number) {
    limit = setLimit(limit);
    page = setPage(page);

    const inviters = await this.invitersRepository
      .createQueryBuilder('inviter')
      .select([
        'inviter.id',
        'inviter.guildId',
        'inviter.userId',
        'inviter.totalInvitations',
        'inviter.occasionalInvitations',
        'inviter.daysCounter',
        'inviter.invalidAccount',
      ])
      .skip(limit * (page - 1))
      .take(limit)
      .orderBy('term.totalInvitations', 'DESC')
      .getMany();

    const totalInviters = await this.invitersRepository.count();
    const size = inviters.length;

    return { page, size, totalInviters, inviters };
  }
}
