import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JugadorModule } from './jugador/jugador.module';

@Module({
  imports: [JugadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
