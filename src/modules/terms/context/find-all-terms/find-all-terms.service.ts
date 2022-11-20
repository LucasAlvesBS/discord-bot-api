import { searchByQuery } from '@helpers/functions/search-by-query.function';
import { setLimit } from '@helpers/functions/set-limit.function';
import { setPage } from '@helpers/functions/set-page.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Term } from '@shared/entities/term.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllTermsService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(page: number, limit: number, name: string) {
    let filterOptions: Record<string, unknown>;
    limit = setLimit(limit);
    page = setPage(page);

    const terms = await this.termsRepository
      .createQueryBuilder('term')
      .select(['term.id', 'term.name', 'term.definition'])
      .orWhere(searchByQuery(name, filterOptions))
      .skip(limit * (page - 1))
      .take(limit)
      .orderBy('term.name', 'ASC')
      .getMany();

    const totalTerms = await this.termsRepository.count();
    const size = terms.length;

    return { page, size, totalTerms, terms };
  }
}
