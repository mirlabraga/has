import { Test, TestingModule } from '@nestjs/testing';
import { IllnessesService } from './illnesses.service';
import { HttpModule } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

describe('IllnessesService', () => {
  let service: IllnessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [IllnessesService, ConfigService],
    }).compile();

    service = module.get<IllnessesService>(IllnessesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
