import { Body, Controller, Get, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { CreateJugadorDto } from './dto/create-jugador-dto';
import { UpdateJugadorDto } from './dto/update-jugador-dto';

@Controller('jugador')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}
  //Retorna todos los jugadores en la base de datos
  @Get()
  getTodosLosJugadores() {
    return this.jugadorService.findAll();
  }

  //Retorna todos los jugadores de cierto pais
  @Get(':pais')
  getJugadoresDePais(@Query('pais') pais: string) {}

  //Retorna todos los jugadores con cierta posicion
  @Get(':posicion')
  getJugadoresConPosicion(@Query('posicion') posicion: string) {}

  //Retorna un jugador con un id determinado
  @Get(':id')
  getJugador(@Query('id') id: number) {
    return this.jugadorService.findOne(id);
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
