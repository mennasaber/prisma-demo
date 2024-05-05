import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCountryDto, UpdateCountryDto } from './dto/country.dto';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}
  create(createCountryDto: CreateCountryDto) {
    return this.prisma.country.create({ data: createCountryDto });
  }

  findAll() {
    return this.prisma.country.findMany();
  }

  findOne(id: number) {
    return this.prisma.country.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.prisma.country.update({
      where: { id },
      data: updateCountryDto,
    });
  }

  remove(id: number) {
    return this.prisma.country.delete({ where: { id } });
  }

  findWithCities() {
    return this.prisma.country.findMany({
      include: {
        city: {
          include: {
            user: true,
          },
        },
      },
    });
  }
}
