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
import { DeleteTermService } from './delete-term.service';

@ApiTags('terms')
@Controller('api/terms')
export class DeleteTermController {
  constructor(private readonly deleteTermService: DeleteTermService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a term' })
  @ApiNoContentResponse({
    description: 'Term deleted',
  })
  @ApiNotFoundResponse({
    description: 'Term not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return await this.deleteTermService.execute(id);
  }
}
