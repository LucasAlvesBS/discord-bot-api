import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inviter } from '@shared/entities/inviter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneInviterService {
  constructor(
    @InjectRepository(Inviter)
    private readonly invitersRepository: Repository<Inviter>,
  ) {}

  async execute(id: string) {
    const inviter = await this.invitersRepository
      .createQueryBuilder('inviter')
      .select([
        'inviter.id',
        'inviter.guildId',
        'inviter.userId',
        'inviter.totalInvitations',
        'inviter.daysCounter',
        'inviter.invalidAccount',
      ])
      .where('inviter.id = :id', { id: id })
      .getOne();

    checkExistence(inviter);

    return inviter;
  }
}
