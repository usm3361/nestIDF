import { Injectable } from '@nestjs/common';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './item.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item)
    private itemModel: typeof Item,
  ) {}
  async createItem(item: Item) {
    return await this.itemModel.create({ ...item });
  }

  findAll() {
    return `This action returns all item`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
