import { DataSource } from 'typeorm';
import { envConfig } from '@configs/env';
import { Term } from '@shared/entities/term.entity';
import { CreateTerms1668123752038 } from './migrations/1668123752038-CreateTerms';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUsername,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
  entities: [Term],
  migrations: [CreateTerms1668123752038],
});
