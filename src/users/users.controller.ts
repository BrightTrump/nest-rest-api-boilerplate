import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users
  @Get()
  getAllUsers() {
    return this.UsersService.getAllUsers();
  }

  // GET /users/:id
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.UsersService.getUser();
  }

  // POST /users
  @Post()
  createUser(@Body() user: {}) {
    return this.UsersService.createUser();
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
