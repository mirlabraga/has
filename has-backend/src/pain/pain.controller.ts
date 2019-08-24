import { Controller, HttpService, Get, Req } from '@nestjs/common';
import { PainService } from './pain.service';
import { Request } from 'express';

@Controller('pain')
export class PainController {

  constructor(private painService: PainService) {
  }

  @Get()
  public async getPains(@Req() request: Request) {
    return this.painService.getPains();
  }
}
