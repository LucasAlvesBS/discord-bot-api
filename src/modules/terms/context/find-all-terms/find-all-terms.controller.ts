import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { TermSwagger } from '@shared/swaggers/term.swagger';
import { DefaultPagination } from '@shared/helpers/paginations/default.pagination';
import { FindAllTermsService } from './find-all-terms.service';

@ApiTags('terms')
@Controller('api/terms')
export class FindAllTermsController {
  constructor(private readonly findAllTermsService: FindAllTermsService) {}

  @Get()
  @ApiOperation({ summary: 'List all terms' })
  @ApiOkResponse({
    type: TermSwagger,
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async handle(
    @Query() { page, limit }: DefaultPagination,
  ): Promise<Record<string, unknown>> {
    return await this.findAllTermsService.execute(page, limit);
  }
}