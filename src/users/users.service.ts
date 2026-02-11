import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Bright Munemu',
      email: 'brightmunemu@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Destiny Oghenerouna',
      email: 'zoeyydad@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Theophilus Ukuyoma',
      email: 'theo4biz@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Mary Sokoh',
      email: 'marysokoh4@gmail.com',
      role: 'DESIGNER',
    },
    {
      id: 5,
      name: 'Favour Oghenevwegba Ashunaira',
      email: 'marysokoh4@gmail.com',
      role: 'INTERN',
    },
  ];
}
