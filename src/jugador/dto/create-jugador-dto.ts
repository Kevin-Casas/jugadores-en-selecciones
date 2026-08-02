import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateJugadorDto {
  @ApiProperty({ example: 'Lionel Messi', description: 'Nombre del Jugador' })
  @IsString()
  nombre!: string;
  @ApiProperty({ example: 'Argentina', description: 'País del Jugador' })
  @IsString()
  pais!: string;
  @ApiProperty({ example: 'Delantero', description: 'Posición del Jugador' })
  @IsString()
  posicion!: string;
}
