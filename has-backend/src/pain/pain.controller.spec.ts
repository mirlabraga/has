import { Test, TestingModule } from '@nestjs/testing';
import { PainController } from './pain.controller';
import { HttpModule } from '@nestjs/common';
import { PainService, Pains } from './pain.service';

describe('Pain Controller', () => {
  let controller: PainController;
  let painService: PainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PainController],
      providers: [PainService]
    }).compile();

    painService = module.get<PainService>(PainService);
    controller = module.get<PainController>(PainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of pains', () => {
    const result: Promise<Pains[]> = Promise.all([0, 1, 2, 3, 4] as Pains[]);
    jest.spyOn(painService, 'getPains').mockImplementation(() => result);
    expect(controller.getPains()).toStrictEqual(result);
  });
});
