import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enchantment {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length:63})
    enchantment: string;

    @Column("int")
    level: number;
}