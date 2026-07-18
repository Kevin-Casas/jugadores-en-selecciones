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
    pais?: string;
    posicion?: string;
  },
) {
  return this.jugadorService.search(filtros);
}

  @Get(':id')
  getJugador(@Query('id') id:string) {
    return this.jugadorService.searchOne(Number(id));
  }

  //Agregar un jugador
  @Post('')
  crearJugador(@Body() dto: CreateJugadorDto) {
    return this.jugadorService.create(dto);
  }

  //Actualiza los datos de un jugador
  @Put('')
  actualizarJugador(@Query('id') id: string, @Body() dto: UpdateJugadorDto) {
    console.log(id, Number(id));
    return this.jugadorService.update(Number(id), dto);
  }

  //Elimina un jugador
  @Delete('')
  borrarJugador(@Query('id') id: string) {
    return this.jugadorService.remove(Number(id));
  }
}
