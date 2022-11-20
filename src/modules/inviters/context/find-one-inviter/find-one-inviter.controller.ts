import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Inviter } from '@shared/entities/inviter.entity';
import { InviterSwagger } from '@shared/swaggers/inviters/inviter.swagger';
import { FindOneInviterService } from './find-one-inviter.service';

@ApiTags('inviters')
@Controller('api/inviters')
export class FindOneInviterController {
  constructor(private readonly findOneInviterService: FindOneInviterService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Take only one inviter' })
  @ApiOkResponse({
    type: InviterSwagger,
  })
  @ApiNotFoundResponse({
    description: 'Inviter not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  async handle(
    @Param('id', new ParseUUIDPipe()) name: string,
  ): Promise<Inviter> {
    return await this.findOneInviterService.execute(name);
  }
}
