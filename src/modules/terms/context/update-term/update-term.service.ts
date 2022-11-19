import { checkBody } from '@helpers/functions/check-body.function';
import { checkDuplicate } from '@helpers/functions/check-duplicate.function';
import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTermDto } from '@shared/dtos/terms/update-term.dto';
import { Term } from '@shared/entities/term.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateTermService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(id: string, body: UpdateTermDto) {
    checkBody(body);
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
