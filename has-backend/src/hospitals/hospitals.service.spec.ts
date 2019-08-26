import { Test, TestingModule } from '@nestjs/testing';
import { HospitalsService } from './hospitals.service';
import { HttpModule } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

describe('HospitalsService', () => {
  let service: HospitalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [HospitalsService, ConfigService],
    }).compile();

    service = module.get<HospitalsService>(HospitalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
