import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTermDto } from '@shared/dtos/terms/create-term.dto';
import { Term } from '@shared/entities/term.entity';
import { checkDuplicate } from '@shared/helpers/functions/check-duplicate.function';
import { Repository } from 'typeorm';

@Injectable()
export class CreateTermService {
  constructor(
    @InjectRepository(Term) private readonly termsRepository: Repository<Term>,
  ) {}

  async execute(body: CreateTermDto) {
    const { name } = body;
    const foundTerm = await this.termsRepository.findOneBy({ name });
    checkDuplicate(foundTerm);
    const term = this.termsRepository.create(body);
    return await this.termsRepository.save(term);
  }
}
