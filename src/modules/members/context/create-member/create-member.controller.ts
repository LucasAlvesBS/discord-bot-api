import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMemberDto } from '@shared/dtos/members/create-member.dto';
import { Member } from '@shared/entities/member.entity';
import { CreateMemberSwagger } from '@shared/swaggers/members/create-member.swagger';
import { MemberSwagger } from '@shared/swaggers/members/member.swagger';
import { CreateMemberService } from './create-member.service';

@ApiTags('members')
@Controller('api/members')
export class CreateMemberController {
  constructor(private readonly createMemberService: CreateMemberService) {}

  @Post()
  @ApiOperation({ summary: 'Create a member' })
  @ApiCreatedResponse({
    description: 'Member created successfully',
    type: MemberSwagger,
  })
  @ApiBadRequestResponse({
    description: 'Data entered incorrectly',
  })
  @ApiConflictResponse({
    description: 'Member already exists',
  })
  @ApiBody({
    description: 'Fields to create data',
    required: true,
    type: CreateMemberSwagger,
  })
  async handle(@Body() body: CreateMemberDto): Promise<Member> {
    return await this.createMemberService.execute(body);
  }
}
