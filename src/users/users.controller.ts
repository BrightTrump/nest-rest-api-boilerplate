import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users
  @Get()
  getAllUsers(
    @Query('roles') role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN',
  ) {
    return [];
  }

  // GET /users/:id
  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id };
  }

  // POST /users
  @Post()
  createUser(@Body() user: {}) {
    return user;
  }

  // PATCH /users:id
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUser: {}) {
    return { id, ...updateUser };
  }

  // DELETE /users:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
