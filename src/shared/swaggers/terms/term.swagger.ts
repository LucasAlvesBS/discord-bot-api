import { ApiProperty } from '@nestjs/swagger';

export class TermSwagger {
  @ApiProperty({
    example: '4375c296-85c1-437b-b3ce-7d1822095a5a',
  })
  id: string;

  @ApiProperty({
    example: 'Hashing',
  })
  name: string;

  @ApiProperty({
    example:
      'The algorithmic approach of converting the data into an arbitrary length and specific type of string based on formula.',
  })
  definition: string;

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
