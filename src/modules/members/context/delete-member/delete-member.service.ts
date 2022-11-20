import { checkExistence } from '@helpers/functions/check-existence.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from '@shared/entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteMemberService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepository: Repository<Member>,
  ) {}

  async execute(id: string) {
    const member = await this.membersRepository.findOneBy({ id });
    checkExistence(member);
    this.membersRepository.remove(member);
  }
}
