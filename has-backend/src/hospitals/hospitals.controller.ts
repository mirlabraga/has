import { Controller, HttpService, Req, Get, Post, Body } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { Request } from 'express';
import { Hospital } from './hospitals';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}hospitals`)
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

  @Post()
  async create(@Body() hospital: Hospital): Promise<Hospital> {
    return await this.hospitalsService.create(hospital);
  }
}
