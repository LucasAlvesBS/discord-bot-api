import { InvitersModule } from '@modules/inviters/inviters.module';
import { MembersModule } from '@modules/members/members.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from './configs/env';
import { TermsModule } from './modules/terms/terms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envConfig.dbHost,
      port: envConfig.dbPort,
      username: envConfig.dbUsername,
      password: envConfig.dbPassword,
      database: envConfig.dbName,
      synchronize: false,
      logging: false,
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/**/migrations/*.{ts,js}'],
    }),
    TermsModule,
    InvitersModule,
    MembersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
