import { UpdateUserDto } from './dto/update-user.dto';

import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../database/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
