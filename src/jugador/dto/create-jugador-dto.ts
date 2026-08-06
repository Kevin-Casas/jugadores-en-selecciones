import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateJugadorDto {
  @ApiProperty({ example: 'Lionel Messi', description: 'Nombre del Jugador' })
  @IsString()
  nombre!: string;

  @ApiProperty({ example: 'Argentina', description: 'Equipo del Jugador' })
  @IsString()
  equipo!: string;

  @ApiProperty({ example: 'Delantero', description: 'Posición del Jugador' })
  @IsString()
  posicion!: string;

  @ApiProperty({ example: '5', description: 'Goles hechos por el jugador' })
  @IsPositive()
  goles!: number;

  @ApiProperty({
    example: '10',
    description: 'Asistencias hechas por el jugador',
  })
  @IsPositive()
  asistencias!: number;

  @ApiProperty({
    example: '1',
    description: 'Tarjetas rojas otorgadas jugador',
  })
  @IsPositive()
  tarjetas_rojas!: number;

  @ApiProperty({
    example: '1',
    description: 'Tarjetas amarillas otorgadas jugador',
  })
  @IsPositive()
  tarjetas_amarillas!: number;

  @ApiProperty({
    example: '500',
    description: 'Partidos en los que el jugador participo',
  })
  @IsPositive()
  partidos_jugados!: number;
}
