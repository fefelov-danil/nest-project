import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class MoviesService {
  constructor(private readonly usersService: UsersService) {}
}
