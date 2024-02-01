import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { dataSourceOptions } from '../typeorm/data-source';

config();

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
