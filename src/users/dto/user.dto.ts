import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';
import { StartWidth } from '../decorators/start-width.decorator';

export enum UserTagsEnum {
  MAN = 'man',
  WOMAN = 'women',
}

export class UserDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя не може быть пустым' })
  @Length(2, 20, { message: 'Длина имени должена быть от 2 до 20 символов' })
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  @StartWidth('Description', {
    message: 'Описание должно начинатся с Description',
  })
  description: string;

  @IsInt({ message: 'Поле order должно быть целым числом' })
  @IsPositive({ message: 'Поле order может быть только положительным' })
  order: number;

  @IsArray({ message: 'Теги должны быть массивом' })
  @IsEnum(UserTagsEnum, { each: true, message: 'Недопустимое значение тегов' })
  @IsOptional()
  tags: string[];
}
