
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { Item } from 'src/item/item.model';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
