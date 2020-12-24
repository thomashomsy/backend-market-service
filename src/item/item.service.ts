import { Injectable } from '@nestjs/common';
import {ItemRepository} from '../repositories/ItemRepository'
import Item from '../models/Item.dto';
@Injectable()
export class ItemService {
    constructor(private itemRepository: ItemRepository) {}

     getItemId(item: Item): string {
        //this.itemRepository.
        return '';
    }
}
