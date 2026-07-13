import { Controller, Get, Query } from '@nestjs/common';

@Controller('jugador')
export class JugadorController {
  //Retorna todos los jugadores en la base de datos
  @Get()
  getTodosLosJugadores() {}

  //Retorna todos los jugadores de cierto pais
  @Get(':pais')
  getJugadoresDePais(@Query('pais') pais: string) {}

  //Retorna todos los jugadores con cierta posicion
  @Get(':posicion')
  getJugadoresConPosicion(@Query('posicion') posicion: string) {}

  //Retorna un jugador con un id determinado
  @Get(':id')
  getJugador(@Query('id') id: Number) {}
}
