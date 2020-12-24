import { EntityRepository, Repository } from "typeorm";
import { Enchantment } from "../models/Enchantment.dto";

@EntityRepository(Enchantment)
export class EnchantmentRepository extends Repository<Enchantment> {

    /**
     * 
     * @param enchantment The Enchantment Name 
     * @param level The Level of the Enchantment
     * 
     * @return -1 if not found and the ID of the thing if found
     */
    async exists(enchantment : string, level: number) : Promise<number> {
        const found = await this.findOne({select: ['id'],where: {enchantment, level}}).catch((err: Error) => {console.log(err.message)})
        if (found) {
            return found.id;
        }
        else return -1;
    }
}