import { EntityRepository, Repository } from "typeorm";
import {ItemEntity} from "../models/Item.entity";
import Item from '../models/Item.dto'
import { Injectable } from "@nestjs/common";


@EntityRepository(ItemEntity)
@Injectable()
export class ItemRepository extends Repository<ItemEntity> {
    async exists(item: Item) : Promise<number> {
        const result = await this.createQueryBuilder("item")
            .select("COUNT(*) > 0", "itemExists")
            .innerJoin("item.enchantments", "enchantments")
            .where("enchantment.level = :level", {})
            .getRawOne();
        if (found) {
            return found.id;
        }
        else return -1;
        return 0
    }
}