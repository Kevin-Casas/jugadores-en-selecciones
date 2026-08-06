import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Matches, Max, Min } from 'class-validator';

export class BuscarJugadoresDto {
  @ApiPropertyOptional()
  @IsOptional()
  @Matches(/^[A-Za-zÀ-ÿ\s]+$/, {
    message: 'equipo no puede contener letras o simbolos',
  })
  equipo?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(['Delantero', 'Arquero', 'Defensor', 'Mediocampista'])
  posicion?: string;

  @ApiPropertyOptional()
  @IsOptional()
  goles?: number;

  @ApiPropertyOptional()
  @IsOptional()
  asistencias?: number;

  @ApiPropertyOptional()
  @IsOptional()
  tarjetas_rojas?: number;

  @ApiPropertyOptional()
  @IsOptional()
  tarjetas_amarillas?: number;

  @ApiPropertyOptional()
  @IsOptional()
  partidos_jugados?: number;

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
