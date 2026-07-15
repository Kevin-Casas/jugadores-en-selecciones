import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Jugador } from './entities/jugador.entity';
import { CreateJugadorDto } from './dto/create-jugador-dto';
import { UpdateJugadorDto } from './dto/update-jugador-dto';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private jugadorRepository: Repository<Jugador>,
  ) {}

  //Crear Jugador con TypeORM
  create(createJugadorDto: CreateJugadorDto) {
    const jugador = this.jugadorRepository.create(createJugadorDto);
    return this.jugadorRepository.save(jugador);
  }

  //Retorna un Jugador a partir de los filtros ingresados
  async search(filtros: any) {

  const where: any = {};

  if (filtros.id) {
    where.id = Number(filtros.id);
  }

  if (filtros.pais) {
    where.pais = filtros.pais;
  }

  if (filtros.posicion) {
    where.posicion = filtros.posicion;
  }

  return this.jugadorRepository.find({
    where,
  });
}

  //Actualiza los datos de un Jugador a partir de su id si este existe y lo retorna
  async update(id: number, dto: UpdateJugadorDto) {
    await this.jugadorRepository.update(id, dto);
    return this.search(id);
  }

  //Borra un Jugador a apartir de su id si este existe
  async remove(id: number) {
    return this.jugadorRepository.delete(id);
  }
}
