import { Injectable } from '@nestjs/common';

interface Jugador {
  id: number;
  nombre: string;
  posicion: string;
  pais: string;
}

@Injectable()
export class JugadorService {}
