import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Term } from '@shared/entities/term.entity';
import { setLimit } from '@shared/helpers/functions/set-limit.function';
import { setPage } from '@shared/helpers/functions/set-page.function';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllTermsService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(page: number, limit: number) {
    limit = setLimit(limit);
    page = setPage(page);

    const users = await this.termsRepository
      .createQueryBuilder('term')
      .select(['term.id', 'term.name', 'term.definition'])
      .skip(limit * (page - 1))
      .take(limit)
      .orderBy('term.name', 'ASC')
      .getMany();

    const totalTerms = await this.termsRepository.count();
    const size = users.length;

    return { page, size, totalTerms, users };
  }
}
