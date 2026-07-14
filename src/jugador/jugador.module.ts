import { Module } from '@nestjs/common';
import { JugadorController } from './jugador.controller';
import { JugadorService } from './jugador.service';
import { Jugador } from './entities/jugador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])], //Importa entidad Jugador
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class JugadorModule {}
