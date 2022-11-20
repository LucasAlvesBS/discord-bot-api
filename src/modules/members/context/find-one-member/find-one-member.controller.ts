import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Member } from '@shared/entities/member.entity';
import { MemberSwagger } from '@shared/swaggers/members/member.swagger';
import { FindOneMemberService } from './find-one-member.service';

@ApiTags('members')
@Controller('api/members')
export class FindOneMemberController {
  constructor(private readonly findOneMemberService: FindOneMemberService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Take only one member' })
  @ApiOkResponse({
    type: MemberSwagger,
  })
  @ApiNotFoundResponse({
    description: 'Member not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  async handle(
    @Param('id', new ParseUUIDPipe()) name: string,
  ): Promise<Member> {
    return await this.findOneMemberService.execute(name);
  }
}
