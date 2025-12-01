import { Injectable, NotFoundException } from '@nestjs/common';
import { isObject } from '@nestjs/common/utils/shared.utils';

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

  create() {
    const newUser = {
      id: this.users.length + 1,
      name: `user-${this.users.length + 1}`,
      age: Math.floor(Math.random() * 100) + 1,
    };

    this.users.push(newUser);

    return this.users;
  }
}
