import { Injectable } from '@nestjs/common';

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
    return this.users.find((item) => item.id === id);
  }
}
