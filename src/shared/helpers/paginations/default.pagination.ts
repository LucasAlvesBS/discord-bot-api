import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class DefaultPagination {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    description: 'Page to search',
    default: 1,
  })
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @Min(1)
  @Max(10)
  @ApiPropertyOptional({
    description: 'Limit of users per page',
    default: 10,
  })
  limit?: number;
}
