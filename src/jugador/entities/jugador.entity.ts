import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('jugadores_mundial_2026') //Tabla de Jugadores
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