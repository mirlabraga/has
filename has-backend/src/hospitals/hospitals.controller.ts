import { Controller, Get, Param } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}/hospitals`)
export class HospitalsController {

  constructor(private hospitalsService: HospitalsService) {
  }

  @Get()
  async getHospitals() {
    return this.hospitalsService.getHospitals();
  }

  @Get('waitingtimes')
  async calculateWaitingTimes() {
    return this.hospitalsService.calculateWaitingTimes();
  }

  @Get('waitingtimes/pain=:pain')
  async calculateWaitingTimesByPain(@Param('pain') pain) {
    return this.hospitalsService.calculateWaitingTimesByPain(pain);
  }
}
