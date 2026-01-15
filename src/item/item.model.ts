import { DataTypes } from 'sequelize';
import {
  Column,
  Min,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript';

@Table
export class Item extends Model {
  @NotEmpty({ msg: 'name is required and cannot be empty.' })
  @Column({
    unique: true,
  })
  declare name: string;

  @NotEmpty({ msg: 'type is required and cannot be empty.' })
  @Column
  declare type: string;

  @Min(0)
  @Column(DataTypes.INTEGER)
  declare quantity: Number;

  @Min(1)
  @Column
  declare pricePerUnit: Number;

  @Column
  declare hasImage: boolean;
}
