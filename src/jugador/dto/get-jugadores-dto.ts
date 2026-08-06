import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Matches, Max, Min } from 'class-validator';

export class BuscarJugadoresDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Matches(/^[A-Za-zÀ-ÿ\s]+$/, {
    message: 'pais no puede contener letras o simbolos',
  })
  pais?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(['Delantero', 'Arquero', 'Defensor', 'Mediocampista'])
  posicion?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 25;
}
