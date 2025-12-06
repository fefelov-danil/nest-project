import { Injectable, NotFoundException } from '@nestjs/common';
import { isObject } from '@nestjs/common/utils/shared.utils';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Danil', age: 34 },
    { id: 2, name: 'Anastasiya', age: 32, description: 'Test description' },
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

  create(dto: UserDto) {
    const { name, age, description } = dto;

    const newUser = {
      id: this.users.length + 1,
      name,
      age,
      description,
    };

    this.users.push(newUser);

    return this.users;
  }

  update(id: number, dto: UserDto) {
    const { name, age, description } = dto;

    const user = this.findById(id);

    user.name = name;
    user.age = age;
    user.description = description;

    return user;
  }

  pathUpdate(id: number, dto: Partial<UserDto>) {
    const user = this.findById(id);
    Object.assign(user, dto);

    return user;
  }

  delete(id: number) {
    const user = this.findById(id);
    this.users = this.users.filter((item) => item.id !== user.id);

    return user;
  }
}
