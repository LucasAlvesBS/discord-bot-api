import { Body, Controller, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import {
  ApiOperation,
  ApiNotFoundResponse,
  ApiParam,
  ApiBody,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';
import { UpdateInviterDto } from '@shared/dtos/inviters/update-inviter.dto';
import { Inviter } from '@shared/entities/inviter.entity';
import { UpdateInviterSwagger } from '@shared/swaggers/inviters/update-inviter.swagger';
import { UpdateInviterService } from './update-inviter.service';

@ApiTags('inviters')
@Controller('api/inviters')
export class UpdateInviterController {
  constructor(private readonly updateInviterService: UpdateInviterService) {}

  @Patch(':id')
  @ApiOperation({ summary: 'Update an inviter' })
  @ApiOkResponse({
    description: 'Inviter updated',
  })
  @ApiNotFoundResponse({
    description: 'Inviter not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  @ApiBody({
    description: 'Fields to update data',
    type: UpdateInviterSwagger,
  })
  async handle(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateInviterDto,
  ): Promise<Inviter> {
    return await this.updateInviterService.execute(id, body);
  }
}
