import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders, ...usersProviders],
  exports: [...databaseProviders, ...usersProviders]
})
export class DatabaseModule {}
