import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Term } from '@shared/entities/term.entity';
import { checkExistence } from '@shared/helpers/functions/check-existence.function';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneTermService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(name: string) {
    const term = await this.termsRepository
      .createQueryBuilder('term')
      .select(['term.id', 'term.name', 'term.definition'])
      .where('term.name = :name', { name: name })
      .getOne();

    checkExistence(term);

    return term;
  }
}
