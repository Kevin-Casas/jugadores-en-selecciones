import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    if (filtros.goles) {
      where.goles = filtros.goles;
    }

    if (filtros.asistencias) {
      where.asistencias = filtros.asistencias;
    }

    if (filtros.tarjetas_rojas) {
      where.tarjetas_rojas = filtros.tarjetas_rojas;
    }

    if (filtros.tarjetas_amarillas) {
      where.tarjetas_amarillas = filtros.tarjetas_amarillas;
    }

    if (filtros.partidos_jugados) {
      where.partidos_jugados = filtros.partidos_jugados;
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
