import { Controller, HttpService, Req, Get } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { Request } from 'express';

@Controller('hospitals')
export class HospitalsController {

  constructor(private readonly http: HttpService, private hospitalsService: HospitalsService) {
  }

  @Get()
  async getUsersConfluence(@Req() request: Request) {
    return this.hospitalsService.getHospitals();
  }
}
