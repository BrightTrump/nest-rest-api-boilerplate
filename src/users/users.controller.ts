import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // GET /users
  @Get()
  getAllUsers(
    @Query('role') role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN',
  ) {
    return this.usersService.getAllUsers(role);
  }

  // GET /users/:id
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  // POST /users
  @Post()
  createUser(
    @Body()
    createUserdto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserdto);
  }

  // PATCH /users:id
  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  // DELETE /users:id
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
