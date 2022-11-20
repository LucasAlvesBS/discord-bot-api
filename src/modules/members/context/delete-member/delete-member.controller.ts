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
import { DeleteMemberService } from './delete-member.service';

@ApiTags('members')
@Controller('api/members')
export class DeleteMemberController {
  constructor(private readonly deleteMemberService: DeleteMemberService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a member' })
  @ApiNoContentResponse({
    description: 'Member deleted',
  })
  @ApiNotFoundResponse({
    description: 'Member not found',
  })
  @ApiParam({
    name: 'id',
    example: '56ab8340-53fe-4046-92e4-af14a6388c37',
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return await this.deleteMemberService.execute(id);
  }
}
