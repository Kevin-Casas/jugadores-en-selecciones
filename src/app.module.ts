import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JugadorModule } from './jugador/jugador.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { logger } from './middleware/logger.middleware';
import { JugadorController } from './jugador/jugador.controller';
import { seconds, ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CacheModule } from '@nestjs/cache-manager';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    ThrottlerModule.forRoot({
      //Rate Limit 10 request porm inuto
      throttlers: [{ ttl: seconds(60), limit: 100 }],
    }),
    CacheModule.register({ isGlobal: true, ttl:5}), // Cache 5 segundos tiempo de vida, 100 elementos maximo por default
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule, //Cargar modulo para uso de archivo .env
      ],
      inject: [ConfigService], //Injectar

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),

        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),

        autoLoadEntities: true,
      }),
    }),
    JugadorModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: ThrottlerGuard }], //Implementacion de rate limit global
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(JugadorController);
  }
}
