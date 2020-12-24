import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EnchantmentEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length:63})
    enchantment: string;

    @Column("int")
    level: number;
}