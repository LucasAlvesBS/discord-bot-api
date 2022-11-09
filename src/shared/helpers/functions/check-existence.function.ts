import { NotFoundException } from '@nestjs/common';
import { Term } from '@shared/entities/term.entity';
import { notFoundMessage } from '../messages/not-found.message';

export const checkExistence = (module: Term) => {
  if (!module) {
    throw new NotFoundException(notFoundMessage.PAGE);
  }
};
