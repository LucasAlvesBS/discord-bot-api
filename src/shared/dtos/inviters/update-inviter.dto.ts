import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class UpdateInviterDto {
  @IsOptional()
  @IsInt()
  totalInvitations?: number;

  @IsOptional()
  @IsInt()
  occasionalInvitations?: number;

  @IsOptional()
  @IsInt()
  daysCounter?: number;

  @IsOptional()
  @IsBoolean()
  invalidAccount?: boolean;
}
