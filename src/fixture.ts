import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
      name: 'Produto1',
      description: 'Descrição do Produto 1',
      price: 19.99,
      image_url: 'https://example.com/image1.jpg',
      created_at: '2024-02-01T12:34:56.789Z',
    },
    {
      id: '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
      name: 'Produto2',
      description: 'Descrição do Produto 2',
      price: 29.99,
      image_url: 'https://example.com/image2.jpg',
      created_at: '2024-02-01T12:45:00.123Z',
    },
    {
      id: '6ba7b812-9dad-11d1-80b4-00c04fd430c8',
      name: 'Produto3',
      description: 'Descrição do Produto 3',
      price: 39.99,
      image_url: 'https://example.com/image3.jpg',
      created_at: '2024-02-01T13:00:15.456Z',
    },
    {
      id: '6ba7b813-9dad-11d1-80b4-00c04fd430c8',
      name: 'Produto4',
      description: 'Descrição do Produto 4',
      price: 49.99,
      image_url: 'https://example.com/image4.jpg',
      created_at: '2024-02-01T13:15:30.789Z',
    },
    {
      id: '6ba7b814-9dad-11d1-80b4-00c04fd430c8',
      name: 'Produto5',
      description: 'Descrição do Produto 5',
      price: 59.99,
      image_url: 'https://example.com/image5.jpg',
      created_at: '2024-02-01T13:30:45.012Z',
    },
    {
      id: '6ba7b815-9dad-11d1-80b4-00c04fd430c8',
      name: 'Produto6',
      description: 'Descrição do Produto 6',
      price: 69.99,
      image_url: 'https://example.com/image6.jpg',
      created_at: '2024-02-01T13:45:00.345Z',
    },
  ]);

  await app.close();
}
bootstrap();
