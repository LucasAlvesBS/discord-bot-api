import { DataSource } from 'typeorm';
import { envConfig } from '@configs/env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUsername,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/**/migrations/*.{ts,js}'],
});
