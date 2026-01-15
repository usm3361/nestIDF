import { IsNotEmpty, Min } from 'class-validator';
export class CreateItemDto {
  @IsNotEmpty()
  name: String;

  @IsNotEmpty()
  type: String;

  @Min(0, { message: 'Minimum quantity is 0' })
  quantity: Number;

  @Min(1, { message: 'Price must be greater than 1' })
  pricePerUnit: Number;

  hasImag: boolean;
}
