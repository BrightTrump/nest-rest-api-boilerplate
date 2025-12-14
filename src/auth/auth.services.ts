import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {}
  signup() {
    return { message: 'User registered successfully!' };
  }

  signin() {
    return { message: 'Logged in successfully!' };
  }
}
