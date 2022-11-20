import { NotFoundException } from '@nestjs/common';
import { Inviter } from '@shared/entities/inviter.entity';
import { Member } from '@shared/entities/member.entity';
import { Term } from '@shared/entities/term.entity';
import { notFoundMessage } from '../messages/not-found.message';

export const checkExistence = (module: Member | Term | Inviter) => {
  if (!module) {
    throw new NotFoundException(notFoundMessage.PAGE);
  }
};
