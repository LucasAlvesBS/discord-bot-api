import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '@shared/entities/member.entity';
import { CreateMemberController } from './context/create-member/create-member.controller';
import { CreateMemberService } from './context/create-member/create-member.service';
import { DeleteMemberController } from './context/delete-member/delete-member.controller';
import { DeleteMemberService } from './context/delete-member/delete-member.service';
import { FindAllMembersController } from './context/find-all-members/find-all-members.controller';
import { FindAllMembersService } from './context/find-all-members/find-all-members.service';
import { FindOneMemberController } from './context/find-one-member/find-one-member.controller';
import { FindOneMemberService } from './context/find-one-member/find-one-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [
    FindAllMembersController,
    FindOneMemberController,
    CreateMemberController,
    DeleteMemberController,
  ],
  providers: [
    FindAllMembersService,
    FindOneMemberService,
    CreateMemberService,
    DeleteMemberService,
  ],
})
export class MembersModule {}
