import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 20)
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsOptional()
  description: string;
}
