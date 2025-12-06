import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UserDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не може быть пустым' })
  @Length(2, 20, { message: 'Длина имени должена быть от 2 до 20 символов' })
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  description: string;
}
