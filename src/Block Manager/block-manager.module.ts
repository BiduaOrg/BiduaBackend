import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockManagerService } from './block-manager.service';
import { BlockManagerController } from './block-manager.controller';
import { BlockManagerSchema } from './block-manager.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BlockManager', schema: BlockManagerSchema }])],
  controllers: [BlockManagerController],
  providers: [BlockManagerService],
})
export class BlockManagerModule {}
