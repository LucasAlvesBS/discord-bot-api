import { DefaultPagination } from '@helpers/paginations/default.pagination';
import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { MemberSwagger } from '@shared/swaggers/members/member.swagger';
import { FindAllMembersService } from './find-all-members.service';

@ApiTags('members')
@Controller('api/members')
export class FindAllMembersController {
  constructor(private readonly findAllMembersService: FindAllMembersService) {}

  @Get()
  @ApiOperation({ summary: 'List all members' })
  @ApiOkResponse({
    type: MemberSwagger,
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async handle(
    @Query() { page, limit }: DefaultPagination,
  ): Promise<Record<string, unknown>> {
    return await this.findAllMembersService.execute(page, limit);
  }
}
