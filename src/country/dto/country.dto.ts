import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
export class UpdateCountryDto extends PartialType(CreateCountryDto) {}
