import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Term } from '@shared/entities/term.entity';
import { CreateTermController } from './context/create-term/create-term.controller';
import { CreateTermService } from './context/create-term/create-term.service';
import { DeleteTermController } from './context/delete-term/delete-term.controller';
import { DeleteTermService } from './context/delete-term/delete-term.service';
import { FindAllTermsController } from './context/find-all-terms/find-all-terms.controller';
import { FindAllTermsService } from './context/find-all-terms/find-all-terms.service';
import { FindOneTermController } from './context/find-one-term/find-one-term.controller';
import { FindOneTermService } from './context/find-one-term/find-one-term.service';
import { UpdateTermController } from './context/update-term/update-term.controller';
import { UpdateTermService } from './context/update-term/update-term.service';

@Module({
  imports: [TypeOrmModule.forFeature([Term])],
  controllers: [
    FindAllTermsController,
    FindOneTermController,
    CreateTermController,
    UpdateTermController,
    DeleteTermController,
  ],
  providers: [
    FindAllTermsService,
    FindOneTermService,
    CreateTermService,
    UpdateTermService,
    DeleteTermService,
  ],
})
export class TermsModule {}
