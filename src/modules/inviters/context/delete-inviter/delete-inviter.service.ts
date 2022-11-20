import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inviter } from '@shared/entities/inviter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteInviterService {
  constructor(
    @InjectRepository(Inviter)
    private readonly invitersRepository: Repository<Inviter>,
  ) {}

  async execute(id: string) {
    const inviter = await this.invitersRepository.findOneBy({ id });
    checkExistence(inviter);
    this.invitersRepository.remove(inviter);
  }
}
