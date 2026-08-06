import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsPositive, Matches, Max, Min } from 'class-validator';

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
  @IsPositive()
  goles?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  asistencias?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  tarjetas_rojas?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  tarjetas_amarillas?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
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
