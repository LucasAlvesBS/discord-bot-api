import { OmitType } from '@nestjs/swagger';
import { TermSwagger } from './term.swagger';

export class CreateTermSwagger extends OmitType(TermSwagger, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}
