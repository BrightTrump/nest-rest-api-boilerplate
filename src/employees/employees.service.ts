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
    if (role)
      return this.databaseService.employees.findMany({
        where: {
          role,
        },
      });
    return this.databaseService.employees.findMany({where:{role,}});
  }

  findOne(id: number) {
    return this.databaseService.employees.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeesUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return this.databaseService.employees.delete({
      where: {
        id,
      },
    });
  }
}
