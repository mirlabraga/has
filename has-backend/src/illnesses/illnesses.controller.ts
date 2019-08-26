import { Controller, Get } from '@nestjs/common';
import { IllnessesService } from './illnesses.service';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}/illnesses`)
export class IllnessesController {

  constructor(private illnessesService: IllnessesService) {
  }

  @Get()
  async getIllnesses() {
    return this.illnessesService.getIllnesses();
  }
}
