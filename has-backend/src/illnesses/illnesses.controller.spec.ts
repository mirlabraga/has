import { Test, TestingModule } from '@nestjs/testing';
import { IllnessesController } from './illnesses.controller';

describe('Illnesses Controller', () => {
  let controller: IllnessesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IllnessesController],
    }).compile();

    controller = module.get<IllnessesController>(IllnessesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
