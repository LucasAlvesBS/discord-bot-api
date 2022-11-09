import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTermDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  definition: string;
}
