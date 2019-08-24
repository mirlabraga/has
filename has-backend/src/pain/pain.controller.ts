import { Controller, HttpService, Get, Req } from '@nestjs/common';
import { PainService } from './pain.service';
import { Request } from 'express';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}/pain`)
export class PainController {

  constructor(private painService: PainService) {
  }

  @Get()
  public async getPains(@Req() request: Request) {
    return this.painService.getPains();
  }
}
