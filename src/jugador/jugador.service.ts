import { Injectable } from '@nestjs/common';

interface Jugador {
  id: number;
  nombre: string;
  posicion: string;
  pais: string;
}

@Injectable()
export class JugadorService {
  //Retorna todos los jugadores de la base de datos
  getTodosLosJugadores() {}

  //Retorna todos los jugadores de cierto pais
  getJugadoresDePais(pais: string) {}

  //Retorna todos los jugadores con cierta posicion
  getJugadoresConPosicion(posicion: string) {}

  //Retorna un jugador con un id determinado
  getJugador(id: number) {}
}
