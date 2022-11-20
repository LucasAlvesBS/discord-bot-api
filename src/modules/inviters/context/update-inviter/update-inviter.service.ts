import { checkBody } from '@helpers/functions/check-body.function';
import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateInviterDto } from '@shared/dtos/Inviters/update-Inviter.dto';
import { Inviter } from '@shared/entities/inviter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateInviterService {
  constructor(
    @InjectRepository(Inviter)
    private readonly invitersRepository: Repository<Inviter>,
  ) {}

  async execute(id: string, body: UpdateInviterDto) {
    checkBody(body);
    const inviter = await this.invitersRepository.findOneBy({ id });
    checkExistence(inviter);
    const inviterUpdated = this.invitersRepository.merge(inviter, body);
    await this.invitersRepository.save(inviterUpdated);
  }
}
