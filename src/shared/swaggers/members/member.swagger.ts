import { ApiProperty } from '@nestjs/swagger';
import { Inviter } from '@shared/entities/inviter.entity';

export class MemberSwagger {
  @ApiProperty({
    example: '4375c296-85c1-437b-b3ce-7d1822095a5a',
  })
  id: string;

  @ApiProperty({
    example: '1027553359428845608',
  })
  guildId: string;

  @ApiProperty({
    example: '1030150839207202896',
  })
  userId: string;

  @ApiProperty({
    example: '1f889bfa-7751-44fc-bae3-68228cd30a54',
  })
  inviter: Inviter;

  @ApiProperty({
    example: new Date(),
  })
  createdAt: Date;

  @ApiProperty({
    example: new Date(),
  })
  updatedAt: Date;

  @ApiProperty({
    example: null,
  })
  deletedAt: Date;
}
