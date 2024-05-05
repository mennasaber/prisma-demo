import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class CreateCityDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
  @ApiProperty({ type: Number })
  @IsNumber()
  country_id: number;
}
export class UpdateCityDto extends PartialType(CreateCityDto) {}
