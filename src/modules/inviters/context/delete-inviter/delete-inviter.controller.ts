import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiNotFoundResponse,
  ApiParam,
  ApiNoContentResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteInviterService } from './delete-inviter.service';

@ApiTags('inviters')
@Controller('api/inviters')
export class DeleteInviterController {
  constructor(private readonly deleteInviterService: DeleteInviterService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an inviter' })
  @ApiNoContentResponse({
    description: 'Inviter deleted',
  })
  @ApiNotFoundResponse({
    description: 'Inviter not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return await this.deleteInviterService.execute(id);
  }
}
