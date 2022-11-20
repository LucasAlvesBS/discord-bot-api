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
  ApiConflictResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateTermDto } from '@shared/dtos/terms/update-term.dto';
import { CreateTermSwagger } from '@shared/swaggers/terms/create-term.swagger';
import { UpdateTermService } from './update-term.service';

@ApiTags('terms')
@Controller('api/terms')
export class UpdateTermController {
  constructor(private readonly updateTermService: UpdateTermService) {}

  @Patch(':id')
  @ApiOperation({ summary: 'Update a term' })
  @ApiNoContentResponse({
    description: 'Term updated',
  })
  @ApiNotFoundResponse({
    description: 'Term not found',
  })
  @ApiConflictResponse({
    description: 'Term already exists',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  @ApiBody({
    description: 'Fields to update data',
    type: CreateTermSwagger,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTermDto,
  ): Promise<void> {
    return await this.updateTermService.execute(id, body);
  }
}
