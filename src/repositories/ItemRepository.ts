import { EntityRepository, Repository } from "typeorm";
import { Item } from "../models/Item.dto";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
    
}