import { Test, TestingModule } from '@nestjs/testing';
import { PatientController } from './patient.controller';
import { PatientsSchema } from '../schemas/patients.schemas';
import { getModelToken } from '@nestjs/mongoose';
import { PatientService } from './patient.service';

describe('Patient Controller', () => {
  let controller: PatientController;

  const mockRepository = {
    find() {
      return {};
    }
  };

  const mockMongooseTokens = [
    {
      provide: getModelToken('Patients'),
      useValue: {},
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientController],
      providers: [PatientService, ...mockMongooseTokens],
    }).overrideProvider(getModelToken('Patients'))
    .useValue(mockRepository).compile();

    controller = module.get<PatientController>(PatientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
