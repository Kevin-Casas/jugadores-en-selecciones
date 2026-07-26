import { IsString } from 'class-validator';

export class CreateJugadorDto {
  @IsString()
  nombre!: string;
  @IsString()
  pais!: string;
  @IsString()
  posicion!: string;
}
