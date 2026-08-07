import { Type } from 'class-transformer';
import { IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { CreateJugadorDto } from './create-jugador-dto';

export class CreateJugadoresDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateJugadorDto)
  items!: CreateJugadorDto[];
}
