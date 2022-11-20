import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inviter } from '@shared/entities/inviter.entity';
import { CreateInviterController } from './context/create-inviter/create-inviter.controller';
import { CreateInviterService } from './context/create-inviter/create-inviter.service';
import { DeleteInviterController } from './context/delete-inviter/delete-inviter.controller';
import { DeleteInviterService } from './context/delete-inviter/delete-inviter.service';
import { FindAllInvitersController } from './context/find-all-inviters/find-all-inviters.controller';
import { FindAllInvitersService } from './context/find-all-inviters/find-all-inviters.service';
import { FindOneInviterController } from './context/find-one-inviter/find-one-inviter.controller';
import { FindOneInviterService } from './context/find-one-inviter/find-one-inviter.service';
import { UpdateInviterController } from './context/update-inviter/update-inviter.controller';
import { UpdateInviterService } from './context/update-inviter/update-inviter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inviter])],
  controllers: [
    FindAllInvitersController,
    FindOneInviterController,
    CreateInviterController,
    UpdateInviterController,
    DeleteInviterController,
  ],
  providers: [
    FindAllInvitersService,
    FindOneInviterService,
    CreateInviterService,
    UpdateInviterService,
    DeleteInviterService,
  ],
})
export class InvitersModule {}
