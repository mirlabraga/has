import { Test, TestingModule } from '@nestjs/testing';
import { IllnessesService } from './illnesses.service';

describe('IllnessesService', () => {
  let service: IllnessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IllnessesService],
    }).compile();

    service = module.get<IllnessesService>(IllnessesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
