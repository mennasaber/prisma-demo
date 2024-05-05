import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CountryModule, CityModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
