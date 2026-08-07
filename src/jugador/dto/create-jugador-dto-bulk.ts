import { Type } from 'class-transformer';
import { IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { CreateJugadorDto } from './create-jugador-dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJugadoresDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateJugadorDto)
  @ApiProperty({description: 'Array de Jugadores', type: [CreateJugadorDto]})
  items!: CreateJugadorDto[];
}
