import { DefaultPagination } from '@helpers/paginations/default.pagination';
import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { InviterSwagger } from '@shared/swaggers/inviters/inviter.swagger';
import { FindAllInvitersService } from './find-all-inviters.service';

@ApiTags('inviters')
@Controller('api/inviters')
export class FindAllInvitersController {
  constructor(
    private readonly findAllInvitersService: FindAllInvitersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List all inviters' })
  @ApiOkResponse({
    type: InviterSwagger,
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async handle(
    @Query() { page, limit }: DefaultPagination,
  ): Promise<Record<string, unknown>> {
    return await this.findAllInvitersService.execute(page, limit);
  }
}
