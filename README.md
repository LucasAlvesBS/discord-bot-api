# Sobre

Este projeto tem o intuito de criar uma API para ser consumida pelo bot do discord no servidor da
Havaianas.

# Bibliotecas

- "@nestjs/common": "^9.0.0"
- "@nestjs/config": "^2.2.0"
- "@nestjs/core": "^9.0.0"
- "@nestjs/mapped-types": "^1.2.0"
- "@nestjs/platform-express": "^9.0.0"
- "@nestjs/swagger": "^6.1.3"
- "@nestjs/typeorm": "^9.0.1"
- "class-transformer": "^0.5.1"
- "class-validator": "^0.13.2"
- "dotenv": "^16.0.3"
- "pg": "^8.8.0"
- "reflect-metadata": "^0.1.13"
- "rimraf": "^3.0.2"
- "rxjs": "^7.2.0"
- "typeorm": "^0.3.10"

# Como rodar

Inicialmente, clone o repositório:

```bash
$ git clone https://bitbucket.org/ioasys/bot-manager-api
```

Para instalar as dependências necessárias, execute:

```bash
$ npm install
```

Já para rodar a aplicação na máquina local, execute:

```bash
$ npm run start
```

Para rodar no docker:

```bash
$ docker-compose up
```

# Tecnologias

- Docker
- NodeJS
- TypeScript
- TypeORM
- NestJS

# Variáveis de Ambiente

Na raiz do projeto, consta um arquivo ".env.example", que exibe todas as variáveis de ambiente necessárias. Para rodar a aplicação, altere o nome do arquivo para ".env" e preencha as variáveis com os seus respectivos valores.

# Regras de Negócio

1. A API deve ser capaz de fornecer, quando solicitada, um json contendo todos termos e suas respectivas definições.

# Links

- [Docker](https://docs.docker.com/)
- [NodeJS](https://nodejs.org/en/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [TypeORM](https://typeorm.io/)
- [NestJS](https://docs.nestjs.com/)
