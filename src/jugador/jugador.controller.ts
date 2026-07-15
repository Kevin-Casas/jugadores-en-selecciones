import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { CreateJugadorDto } from './dto/create-jugador-dto';
import { UpdateJugadorDto } from './dto/update-jugador-dto';

@Controller('jugador')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  //Retorna los jugadores si se ingresan filtros, caso contrario se retorna todos los jugadores que cumplan con los filtros
  @Get()
getJugadores(
  @Query() filtros: { 
    id?: string;
    pais?: string;
    posicion?: string;
  },
) {
  return this.jugadorService.search(filtros);
}

  //Agregar un jugador
  @Post(':id')
  crearJugador(@Body() dto: CreateJugadorDto) {
    return this.jugadorService.create(dto);
  }

  //Actualiza los datos de un jugador
  @Put(':id')
  actualizarJugador(@Param('id') id: number, @Body() dto: UpdateJugadorDto) {
    return this.jugadorService.update(id, dto);
  }

  //Elimina un jugador
  @Delete(':id')
  borrarJugador(@Param('id') id: number) {
    return this.jugadorService.remove(id);
  }
}
