import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateInviterService } from './create-inviter.service';
import { CreateInviterDto } from '@shared/dtos/inviters/create-inviter.dto';
import { Inviter } from '@shared/entities/inviter.entity';
import { InviterSwagger } from '@shared/swaggers/inviters/inviter.swagger';
import { CreateInviterSwagger } from '@shared/swaggers/inviters/create-inviter.swagger';

@ApiTags('inviters')
@Controller('api/inviters')
export class CreateInviterController {
  constructor(private readonly createInviterService: CreateInviterService) {}

  @Post()
  @ApiOperation({ summary: 'Create an inviter' })
  @ApiCreatedResponse({
    description: 'Inviter created successfully',
    type: InviterSwagger,
  })
  @ApiBadRequestResponse({
    description: 'Data entered incorrectly',
  })
  @ApiConflictResponse({
    description: 'Inviter already exists',
  })
  @ApiBody({
    description: 'Fields to create data',
    required: true,
    type: CreateInviterSwagger,
  })
  async handle(@Body() body: CreateInviterDto): Promise<Inviter> {
    return await this.createInviterService.execute(body);
  }
}
