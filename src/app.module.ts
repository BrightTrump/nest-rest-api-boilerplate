import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [UserModule, AuthModule],
  providers: [UsersService],
})
export class AppModule {}
