import { OmitType } from '@nestjs/swagger';
import { InviterSwagger } from './inviter.swagger';

export class UpdateInviterSwagger extends OmitType(InviterSwagger, [
  'id',
  'guildId',
  'userId',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}
