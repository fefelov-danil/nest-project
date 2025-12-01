import { Injectable, NotFoundException } from '@nestjs/common';
import { isObject } from '@nestjs/common/utils/shared.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Danil', age: 34 },
    { id: 2, name: 'Anastasiya', age: 32 },
  ];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((item) => item.id === id);

    if (!isObject(user)) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }

  create(dto: CreateUserDto) {
    const { name, age } = dto;

    const newUser = {
      id: this.users.length + 1,
      name,
      age,
    };

    this.users.push(newUser);

    return this.users;
  }

  update(id: number, dto: UpdateUserDto) {
    const { name, age } = dto;

    const user = this.findById(id);

    user.name = name;
    user.age = age;

    return user;
  }
}
