import { ApiProperty } from '@nestjs/swagger';

export class BoardDto {
  @ApiProperty() name: string;
  @ApiProperty() title: string;
  @ApiProperty() content: string;
}
