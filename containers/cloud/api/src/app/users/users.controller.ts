import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  findAll() {
    return this.users.findAll();
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.users.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.users.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.users.delete(id);
  }
}
