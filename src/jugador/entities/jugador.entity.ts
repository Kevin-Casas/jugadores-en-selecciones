import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('jugadores_futbol') //Tabla de Jugadores
export class Jugador {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  equipo!: string;

  @Column()
  posicion!: string;

  @Column()
  goles!: number;

  @Column()
  asistencias!: number;

  @Column()
  tarjetas_rojas!: number;

  @Column()
  tarjetas_amarillas!: number;

  @Column()
  partidos_jugados!: number;
}