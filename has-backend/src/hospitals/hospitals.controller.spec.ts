import { Test, TestingModule } from '@nestjs/testing';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { HttpModule, INestApplication } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Hospital } from './hospitals';

describe('Hospitals Controller', () => {
  let controller: HospitalsController;
  let hospitalsService: HospitalsService;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [HospitalsController],
      providers: [HospitalsService, ConfigService]
    }).compile();

    hospitalsService = module.get<HospitalsService>(HospitalsService);
    controller = module.get<HospitalsController>(HospitalsController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getHospitals', () => {
    it('should return an array of hospitals', async () => {
      const result: Promise<Hospital[]> = Promise.all([
        {
            "id": 1,
            "name": "St Vincent's Hospital",
            "waitingList": [
                {
                    "patientCount": 10,
                    "levelOfPain": 0,
                    "averageProcessTime": 20
                },
                {
                    "patientCount": 5,
                    "levelOfPain": 1,
                    "averageProcessTime": 33
                },
                {
                    "patientCount": 1,
                    "levelOfPain": 2,
                    "averageProcessTime": 15
                },
                {
                    "patientCount": 10,
                    "levelOfPain": 3,
                    "averageProcessTime": 39
                },
                {
                    "patientCount": 2,
                    "levelOfPain": 4,
                    "averageProcessTime": 33
                }
            ]
        },
        {
            "id": 2,
            "name": "Royal Prince Alfred Hospital",
            "waitingList": [
                {
                    "patientCount": 0,
                    "levelOfPain": 0,
                    "averageProcessTime": 60
                },
                {
                    "patientCount": 1,
                    "levelOfPain": 1,
                    "averageProcessTime": 15
                },
                {
                    "patientCount": 2,
                    "levelOfPain": 2,
                    "averageProcessTime": 16
                },
                {
                    "patientCount": 0,
                    "levelOfPain": 3,
                    "averageProcessTime": 87
                },
                {
                    "patientCount": 1,
                    "levelOfPain": 4,
                    "averageProcessTime": 71
                }
            ]
        }
    ] as Hospital[]);
      jest.spyOn(hospitalsService, 'getHospitals').mockImplementation(() => result);
      expect(controller.getHospitals()).toStrictEqual(result);
    });
  });
});
