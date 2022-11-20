import { OmitType } from '@nestjs/swagger';
import { InviterSwagger } from './inviter.swagger';

export class CreateInviterSwagger extends OmitType(InviterSwagger, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}
