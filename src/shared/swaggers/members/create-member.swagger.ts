import { OmitType } from '@nestjs/swagger';
import { MemberSwagger } from './member.swagger';

export class CreateMemberSwagger extends OmitType(MemberSwagger, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}
