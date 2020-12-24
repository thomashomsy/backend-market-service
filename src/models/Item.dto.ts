import { Entity, Column, ManyToMany, PrimaryColumn } from "typeorm";
import {Enchantment} from './Enchantment.dto'

@Entity()
export class Item {
    @PrimaryColumn()
    id: string;

    @Column("varchar", {length:127})
    material: string;

    @Column("varchar", {length: 127})
    potionType: string;

    @Column("boolean")
    isUpgraded: boolean;

    @Column("boolean")
    isExtended: boolean;

    @ManyToMany(() => Enchantment, enchantment => enchantment.id)
    enchantment: Promise<Enchantment[]>
}
