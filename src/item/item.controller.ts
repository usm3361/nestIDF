import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './item.model';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post('transactions')
  create(@Body() createItemDto: Item) {
    return this.itemService.createItem(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
