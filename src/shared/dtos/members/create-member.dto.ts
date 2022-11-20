import { Inviter } from '@shared/entities/inviter.entity';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  guildId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  inviter: Inviter;
}
