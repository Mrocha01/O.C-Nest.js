import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Product } from '../src/products/entities/product.entity';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Product],
  synchronize: true,
  logging: true,
};
