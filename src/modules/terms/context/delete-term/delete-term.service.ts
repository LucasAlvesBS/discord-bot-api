import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Term } from '@shared/entities/term.entity';
import { checkExistence } from '@shared/helpers/functions/check-existence.function';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteTermService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(id: string) {
    const term = await this.termsRepository.findOneBy({ id });
    checkExistence(term);
    this.termsRepository.remove(term);
  }
}
