import { Entity, Column, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {EnchantmentEntity} from './Enchantment.entity'

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length:127})
    material: string;

    @Column("varchar", {length: 127})
    potionType: string;

    @Column("boolean")
    isUpgraded: boolean;

    @Column("boolean")
    isExtended: boolean;

    @ManyToMany(() => EnchantmentEntity, enchantment => enchantment.id)
    enchantments: Promise<EnchantmentEntity[]>
}
