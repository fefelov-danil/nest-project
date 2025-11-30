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
      throw new NotFoundException();
    }

    return user;
  }
}
