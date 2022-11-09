import { ConflictException } from '@nestjs/common';
import { Term } from '@shared/entities/term.entity';
import { conflictMessage } from '../messages/conflict.message';

export const checkDuplicate = (term: Term | string) => {
  if (term) {
    throw new ConflictException(conflictMessage.TERM);
  }
};
