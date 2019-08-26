import { Controller, Get, Req } from '@nestjs/common';
import { PainService } from './pain.service';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}/pains`)
export class PainController {

  constructor(private painService: PainService) {
  }

  @Get()
  public async getPains() {
    return this.painService.getPains();
  }
}
