import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateInviterDto {
  @IsNotEmpty()
  @IsString()
  guildId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsInt()
  totalInvitations: number;

  @IsNotEmpty()
  @IsInt()
  occasionalInvitations: number;

  @IsNotEmpty()
  @IsInt()
  daysCounter: number;

  @IsNotEmpty()
  @IsBoolean()
  invalidAccount: boolean;
}
