import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('jugadores')
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