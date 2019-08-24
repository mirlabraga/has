import { Test, TestingModule } from '@nestjs/testing';
import { PainController } from './pain.controller';

describe('Pain Controller', () => {
  let controller: PainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PainController],
    }).compile();

    controller = module.get<PainController>(PainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
