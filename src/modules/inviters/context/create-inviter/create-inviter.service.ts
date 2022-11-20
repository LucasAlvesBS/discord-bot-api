import { checkDuplicate } from '@helpers/functions/check-duplicate.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInviterDto } from '@shared/dtos/inviters/create-inviter.dto';
import { Inviter } from '@shared/entities/inviter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateInviterService {
  constructor(
    @InjectRepository(Inviter)
    private readonly invitersRepository: Repository<Inviter>,
  ) {}

  async execute(body: CreateInviterDto) {
    const { userId } = body;
    const foundInviter = await this.invitersRepository.findOneBy({ userId });
    checkDuplicate(foundInviter);
    const inviter = this.invitersRepository.create(body);
    return await this.invitersRepository.save(inviter);
  }
}
