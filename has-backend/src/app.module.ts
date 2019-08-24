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
import { PatientService } from './patient/patient.service';
import { PatientsSchema } from './schemas/patients.schemas';
import { PatientController } from './patient/patient.controller';

const mongodbLocation = process.env.MONGODB_URI || 'mongodb://localhost:27017/has';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    MongooseModule.forRoot(mongodbLocation, {
      useNewUrlParser: true,
      useFindAndModify: false,
    }),
    MongooseModule.forFeature([
      {
          name: 'Patients',
          schema: PatientsSchema,
      }
  ])],
  controllers: [AppController, HospitalsController, IllnessesController, PainController, PatientController],
  providers: [AppService, HospitalsService, IllnessesService, PainService, PatientService],
})
export class AppModule {}
