import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Term } from '@shared/entities/term.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindOneTermService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(id: string) {
    const term = await this.termsRepository
      .createQueryBuilder('term')
      .select(['term.id', 'term.name', 'term.definition'])
      .where('term.id = :id', { id: id })
      .getOne();

    checkExistence(term);

    return term;
  }
}
