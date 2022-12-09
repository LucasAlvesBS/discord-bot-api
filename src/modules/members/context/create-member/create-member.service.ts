import { checkDuplicate } from '@helpers/functions/check-duplicate.function';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from '@shared/dtos/members/create-member.dto';
import { Member } from '@shared/entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateMemberService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepository: Repository<Member>,
  ) {}

  async execute(body: CreateMemberDto) {
    const { userId } = body;
    const foundMember = await this.membersRepository.findOneBy({ userId });
    checkDuplicate(foundMember);
    const member = await this.membersRepository.save(body);
    return member;
  }
}
