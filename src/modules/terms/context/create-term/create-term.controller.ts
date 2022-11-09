import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTermDto } from '@shared/dtos/terms/create-term.dto';
import { TermSwagger } from '@shared/swaggers/term.swagger';
import { Term } from '@shared/entities/term.entity';
import { CreateTermService } from './create-term.service';
import { CreateTermSwagger } from '@shared/swaggers/create-term.swagger';

@ApiTags('terms')
@Controller('api/terms')
export class CreateTermController {
  constructor(private readonly findAllTermsService: CreateTermService) {}

  @Post()
  @ApiOperation({ summary: 'Create a term' })
  @ApiCreatedResponse({
    description: 'Term created successfully',
    type: TermSwagger,
  })
  @ApiBadRequestResponse({
    description: 'Data entered incorrectly',
  })
  @ApiConflictResponse({
    description: 'Term already exists',
  })
  @ApiBody({
    description: 'Fields to create data',
    required: true,
    type: CreateTermSwagger,
  })
  async handle(@Body() body: CreateTermDto): Promise<Term> {
    return await this.findAllTermsService.execute(body);
  }
}
