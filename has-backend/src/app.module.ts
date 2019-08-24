import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalsController } from './hospitals/hospitals.controller';
import { IllnessesController } from './illnesses/illnesses.controller';
import { ConfigModule } from './config/config.module';
import { HospitalsService } from './hospitals/hospitals.service';
import { IllnessesService } from './illnesses/illnesses.service';
import { PainService } from './pain/pain.service';
import { PainController } from './pain/pain.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HttpModule, ConfigModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, HospitalsController, IllnessesController, PainController],
  providers: [AppService, HospitalsService, IllnessesService, PainService],
})
export class AppModule {}
