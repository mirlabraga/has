import { Controller, HttpService, Get, Req } from '@nestjs/common';
import { IllnessesService } from './illnesses.service';
import { Request } from 'express';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}/illnesses`)
export class IllnessesController {

  constructor(private illnessesService: IllnessesService) {
  }

  @Get()
  async getIllnesses(@Req() request: Request) {
    return this.illnessesService.getIllnesses();
  }
}
