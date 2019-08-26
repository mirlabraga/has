import { Test, TestingModule } from '@nestjs/testing';
import { IllnessesController } from './illnesses.controller';
import { IllnessesService } from './illnesses.service';
import { ConfigService } from '../config/config.service';
import { HttpModule } from '@nestjs/common';
import { Illnesses } from './illnesses';

describe('Illnesses Controller', () => {
  let controller: IllnessesController;
  let illnessesService: IllnessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [IllnessesController],
      providers: [IllnessesService, ConfigService]
    }).compile();

    illnessesService = module.get<IllnessesService>(IllnessesService);
    controller = module.get<IllnessesController>(IllnessesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of Illnesses', () => {
    const result: Promise<Illnesses[]> = Promise.all([
      {
          "id": 1,
          "name": "Mortal Cold"
      },
      {
          "id": 2,
          "name": "Happy Euphoria"
      }] as Illnesses[]);
    jest.spyOn(illnessesService, 'getIllnesses').mockImplementation(() => result);
    expect(controller.getIllnesses()).toStrictEqual(result);
  });
});
