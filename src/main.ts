import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { envConfig } from '@configs/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const run = new Logger('NestApplication');
  const port = envConfig.apiPort;

  const config = new DocumentBuilder()
    .setTitle('Discord bot API')
    .setDescription('API that stores and queries data for discord bot')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port, () => run.log(`API is running on port ${port}`));
}
bootstrap();
