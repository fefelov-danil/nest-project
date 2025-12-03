import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не може быть пустым' })
  @Length(2, 20, { message: 'Длина имени должена быть от 2 до 20 символов' })
  name: string;

  @IsNumber()
  age: number;
}
