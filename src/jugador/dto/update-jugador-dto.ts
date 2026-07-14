import {PartialType} from '@Nestjs/mapped-types';
import { CreateJugadorDto } from './create-jugador-dto';

export class UpdateJugadorDto extends PartialType(CreateJugadorDto) {}

