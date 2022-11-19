import { BadRequestException } from '@nestjs/common';
import { UpdateTermDto } from '@shared/dtos/terms/update-term.dto';
import { badRequestMessage } from '../messages/bad-request.message';

export const checkBody = (body: UpdateTermDto) => {
  if (Object.keys(body).length === 0) {
    throw new BadRequestException(badRequestMessage.BODY_EMPTY);
  }
};
