import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, Matches } from 'class-validator';

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
}
