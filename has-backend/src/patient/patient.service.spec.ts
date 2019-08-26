import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';
import { AppModule } from '../app.module';
import { getModelToken } from '@nestjs/mongoose';


describe('PatientService', () => {
  let service: PatientService;

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
      imports: [AppModule],
      providers: [PatientService, ...mockMongooseTokens],
    }).overrideProvider(getModelToken('Patients'))
    .useValue(mockRepository).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
