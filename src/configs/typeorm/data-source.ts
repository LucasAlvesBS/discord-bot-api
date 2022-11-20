import { DataSource } from 'typeorm';
import { envConfig } from '@configs/env';
import { Term } from '@shared/entities/term.entity';
import { CreateTerms1668123752038 } from './migrations/1668123752038-CreateTerms';
import { Inviter } from '@shared/entities/inviter.entity';
import { Member } from '@shared/entities/member.entity';
import { CreateInviters1668960771886 } from './migrations/1668960771886-CreateInviters';
import { CreateMembers1668961006213 } from './migrations/1668961006213-CreateMembers';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envConfig.dbHost,
  port: envConfig.dbPort,
  username: envConfig.dbUsername,
  password: envConfig.dbPassword,
  database: envConfig.dbName,
  entities: [Term, Inviter, Member],
  migrations: [
    CreateTerms1668123752038,
    CreateInviters1668960771886,
    CreateMembers1668961006213,
  ],
});
