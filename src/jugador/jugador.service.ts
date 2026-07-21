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

  //Retorna un Jugador a partir de los filtros ingresados
  search(filtros: any) {
    const where: any = {};

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
