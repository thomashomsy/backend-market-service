import { EntityRepository, Repository } from "typeorm";
import {EnchantmentEntity} from '../models/Enchantment.entity'
import Enchantment from "../models/Enchantment.dto";

@EntityRepository(EnchantmentEntity)
export class EnchantmentRepository extends Repository<EnchantmentEntity> {

    /**
     * 
     * @param enchantment The Enchantment Name 
     * @param level The Level of the Enchantment
     * 
     * @return -1 if not found and the ID of the thing if found
     */
    async exists(enchantment: Enchantment) : Promise<number> {
        const found = await this.findOne({select: ['id'],where: {enchantment: enchantment.enchantment, level: enchantment.level}}).catch((err: Error) => {console.log(err.message)})
        if (found) {
            return found.id;
        }
        else return -1;
    }
}