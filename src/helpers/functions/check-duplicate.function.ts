import { ConflictException } from '@nestjs/common';
import { Inviter } from '@shared/entities/inviter.entity';
import { Member } from '@shared/entities/member.entity';
import { Term } from '@shared/entities/term.entity';
import { conflictMessage } from '../messages/conflict.message';

export const checkDuplicate = (term: Member | Term | Inviter | string) => {
  if (term) {
    throw new ConflictException(conflictMessage.TERM);
  }
};
