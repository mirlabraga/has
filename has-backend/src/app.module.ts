import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalsController } from './hospitals/hospitals.controller';
import { IllnessesController } from './illnesses/illnesses.controller';
import { ConfigModule } from './config/config.module';
import { HospitalsService } from './hospitals/hospitals.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [AppController, HospitalsController, IllnessesController],
  providers: [AppService, HospitalsService],
})
export class AppModule {}
