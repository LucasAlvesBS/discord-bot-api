import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTermDto } from '@shared/dtos/terms/update-term.dto';
import { Term } from '@shared/entities/term.entity';
import { checkDuplicate } from '@shared/helpers/functions/check-duplicate.function';
import { checkExistence } from '@shared/helpers/functions/check-existence.function';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateTermService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(id: string, body: UpdateTermDto) {
    const term = await this.termsRepository.findOneBy({ id });
    checkExistence(term);
    const { name } = body;
    const termInBody = await this.termsRepository
      .createQueryBuilder('term')
      .select(['term.name'])
      .where('term.name = :name', { name: name })
      .getOne();
    checkDuplicate(termInBody);
    const termUpdated = this.termsRepository.merge(term, body);
    await this.termsRepository.save(termUpdated);
  }
}
