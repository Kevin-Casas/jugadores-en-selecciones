import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('jugadores') //Tabla de Jugadores
export class Jugador {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  pais!: string;

  @Column()
  posicion!: string;
}