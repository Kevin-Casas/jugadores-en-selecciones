import { IsIn, IsOptional, Matches } from 'class-validator';

export class BuscarJugadoresDto {
  @IsOptional()
  @Matches(/^[A-Za-zÀ-ÿ\s]+$/, {
    message: 'pais no puede contener letras o simbolos',
  })
  pais?: string;

  @IsOptional()
  @IsIn(['Delantero', 'Arquero', 'Defensor', 'Mediocampista'])
  posicion?: string;
}
