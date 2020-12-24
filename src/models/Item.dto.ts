import Enchantment from './Enchantment.dto'
export default class Item {
    material: string;
    potionType: string;
    isUpgraded: boolean;
    isExtended: boolean;

    enchantment: Enchantment[]
}
