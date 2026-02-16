import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createEmployeeDto: Prisma.EmployeesCreateInput) {
    return this.databaseService.employees.create({ data: createEmployeeDto });
  }

  findAll(role?: 'INTERN' | 'DESIGNER' | 'ENGINEER' | 'ADMIN') {
    return this.databaseService.employees.findMany({
      where: {
        role,
      },
    });
    return this.databaseService.employees.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeesUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
