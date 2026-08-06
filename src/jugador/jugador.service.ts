import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Jugador } from './entities/jugador.entity';
import { CreateJugadorDto } from './dto/create-jugador-dto';
import { UpdateJugadorDto } from './dto/update-jugador-dto';
import { BuscarJugadoresDto } from './dto/get-jugadores-dto';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private jugadorRepository: Repository<Jugador>,
  ) {}

  //Crear Jugador con TypeORM
  async create(createJugadorDto: CreateJugadorDto) {
    const jugadorExistente = await this.jugadorRepository.findOneBy({
      nombre: createJugadorDto.nombre,
      posicion: createJugadorDto.posicion,
    });

    if (jugadorExistente) {
      throw new ConflictException('El Jugador ya existe');
    }

    const jugador = this.jugadorRepository.create(createJugadorDto);
    return this.jugadorRepository.save(jugador);
  }

  //Retorna Jugadores a partir de los filtros ingresados
  async search(filtros: BuscarJugadoresDto) {
    const where: any = {};

    if (filtros.equipo) {
      where.equipo = filtros.equipo;
    }

    if (filtros.posicion) {
      where.posicion = filtros.posicion;
    }

    //Filtro para goles
    if (filtros.golesMin && filtros.golesMax) {
      where.goles = Between(filtros.golesMin, filtros.golesMax);
    } else if (filtros.golesMin) {
      where.goles = MoreThanOrEqual(filtros.golesMin);
    } else if (filtros.golesMax) {
      where.goles = LessThanOrEqual(filtros.golesMax);
    }

    //Filtro para asistencias
    if (filtros.asistenciasMin && filtros.asistenciasMax) {
      where.goles = Between(filtros.asistenciasMin, filtros.asistenciasMax);
    } else if (filtros.asistenciasMin) {
      where.goles = MoreThanOrEqual(filtros.asistenciasMin);
    } else if (filtros.asistenciasMax) {
      where.goles = LessThanOrEqual(filtros.asistenciasMax);
    }

    //Filtro para tarjetas rojas
    if (filtros.tarjetas_rojasMin && filtros.tarjetas_rojasMax) {
      where.goles = Between(filtros.tarjetas_rojasMin, filtros.tarjetas_rojasMax);
    } else if (filtros.tarjetas_rojasMin) {
      where.goles = MoreThanOrEqual(filtros.tarjetas_rojasMin);
    } else if (filtros.tarjetas_rojasMax) {
      where.goles = LessThanOrEqual(filtros.tarjetas_rojasMax);
    }

    //Filtro para tarjetas amarillas
    if (filtros.tarjetas_amarillasMin && filtros.tarjetas_amarillasMax) {
      where.goles = Between(filtros.tarjetas_amarillasMin, filtros.tarjetas_amarillasMax);
    } else if (filtros.tarjetas_amarillasMin) {
      where.goles = MoreThanOrEqual(filtros.tarjetas_amarillasMin);
    } else if (filtros.tarjetas_amarillasMax) {
      where.goles = LessThanOrEqual(filtros.tarjetas_amarillasMax);
    }

    //Filtro para partidos jugados
    if (filtros.partidos_jugadosMin && filtros.partidos_jugadosMax) {
      where.goles = Between(filtros.partidos_jugadosMin, filtros.partidos_jugadosMax);
    } else if (filtros.partidos_jugadosMin) {
      where.goles = MoreThanOrEqual(filtros.partidos_jugadosMin);
    } else if (filtros.partidos_jugadosMax) {
      where.goles = LessThanOrEqual(filtros.partidos_jugadosMax);
    }
    const [items, total] = await this.jugadorRepository.findAndCount({
      where,
      skip: (filtros.page - 1) * filtros.limit,
      take: filtros.limit,
      order: { equipo: 'ASC' },
    });

    return {
      items,
      pagination: {
        page: filtros.page,
        limit: filtros.limit,
        total,
        totalPages: Math.ceil(total / filtros.limit),
      },
    };
  }

  //Retorna un jugador a partir de su id
  async searchOne(id) {
    const jugador = await this.jugadorRepository.findOneBy({ id });

    if (!jugador) {
      throw new NotFoundException('Jugador no encontrado');
    }
    return jugador;
  }

  //Actualiza los datos de un Jugador a partir de su id si este existe y lo retorna
  async update(id, dto: UpdateJugadorDto) {
    const jugador = await this.jugadorRepository.findOneBy({ id });

    if (!jugador) {
      throw new NotFoundException('Jugador no encontrado');
    }
    return this.jugadorRepository.update(id, dto);
  }

  //Borra un Jugador a apartir de su id si este existe
  async remove(id) {
    const jugador = await this.jugadorRepository.findOneBy({ id });

    if (!jugador) {
      throw new NotFoundException('Jugador no encontrado');
    }
    return this.jugadorRepository.delete(id);
  }
}
