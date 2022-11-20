import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiNotFoundResponse,
  ApiParam,
  ApiNoContentResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateInviterDto } from '@shared/dtos/inviters/update-inviter.dto';
import { UpdateInviterSwagger } from '@shared/swaggers/inviters/update-inviter.swagger';
import { UpdateInviterService } from './update-inviter.service';

@ApiTags('inviters')
@Controller('api/inviters')
export class UpdateInviterController {
  constructor(private readonly updateInviterService: UpdateInviterService) {}

  @Patch(':id')
  @ApiOperation({ summary: 'Update an inviter' })
  @ApiNoContentResponse({
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
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateInviterDto,
  ): Promise<void> {
    return await this.updateInviterService.execute(id, body);
  }
}
