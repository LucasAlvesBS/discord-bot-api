import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TermSwagger } from '@shared/swaggers/term.swagger';
import { Term } from '@shared/entities/term.entity';
import { FindOneTermService } from './find-one-term.service';

@ApiTags('terms')
@Controller('api/terms')
export class FindOneTermController {
  constructor(private readonly findOneTermService: FindOneTermService) {}

  @Get(':name')
  @ApiOperation({ summary: 'Take only one term' })
  @ApiOkResponse({
    type: TermSwagger,
  })
  @ApiNotFoundResponse({
    description: 'Term not found',
  })
  @ApiParam({
    name: 'name',
    example: 'Havaianas',
    required: true,
  })
  async handle(@Param('name') name: string): Promise<Term> {
    return await this.findOneTermService.execute(name);
  }
}