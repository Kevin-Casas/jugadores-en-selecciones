import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { CreateJugadorDto } from './dto/create-jugador-dto';
import { UpdateJugadorDto } from './dto/update-jugador-dto';
import { BuscarJugadoresDto } from './dto/get-jugadores-dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('jugador')
@UseInterceptors(CacheInterceptor)
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  //Retorna los jugadores si se ingresan filtros, caso contrario se retorna todos los jugadores que cumplan con los filtros
  @Get()
  getJugadores(
    @Query(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    filtros: BuscarJugadoresDto,
  ) {
    return this.jugadorService.search(filtros);
  }

  @Get(':id')
  getJugador(@Param('id', ParseIntPipe) id: number) {
    return this.jugadorService.searchOne(id);
  }

  //Agregar un jugador
  @Post('')
  crearJugador(@Body() dto: CreateJugadorDto) {
    return this.jugadorService.create(dto);
  }

  //Actualiza los datos de un jugador
  @Put(':id')
  actualizarJugador(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateJugadorDto,
  ) {
    return this.jugadorService.update(id, dto);
  }

  //Elimina un jugador
  @Delete(':id')
  borrarJugador(@Param('id', ParseIntPipe) id: number) {
    return this.jugadorService.remove(id);
  }
}
