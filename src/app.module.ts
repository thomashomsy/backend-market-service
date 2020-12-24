import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { ItemRepository } from './repositories/ItemRepository';

@Module({
  imports: [ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
