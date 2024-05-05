import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
  @ApiProperty({ type: Number })
  @IsNumber()
  city_id: number;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
