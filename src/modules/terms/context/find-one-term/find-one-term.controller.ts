import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TermSwagger } from '@shared/swaggers/terms/term.swagger';
import { Term } from '@shared/entities/term.entity';
import { FindOneTermService } from './find-one-term.service';

@ApiTags('terms')
@Controller('api/terms')
export class FindOneTermController {
  constructor(private readonly findOneTermService: FindOneTermService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Take only one term' })
  @ApiOkResponse({
    type: TermSwagger,
  })
  @ApiNotFoundResponse({
    description: 'Term not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  async handle(@Param('id', new ParseUUIDPipe()) name: string): Promise<Term> {
    return await this.findOneTermService.execute(name);
  }
}
