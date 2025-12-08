import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MoviesModule } from '../movies/movies.module';

@Module({
  imports: [MoviesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
