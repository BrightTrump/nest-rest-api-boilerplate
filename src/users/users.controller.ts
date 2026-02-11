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
export class UserController {
  // GET /users
  @Get()
  getAllUsers() {
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
