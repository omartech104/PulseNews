import { Expose } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

export class HeadersDto {
  @IsString()
  @IsOptional()
  @Expose({ name: 'x-category' }) // Maps the header 'x-category' to this property
  category?: string;

  @IsString()
  @IsOptional()
  @Expose({ name: 'accept-language' })
  lang?: string = 'en';
}
