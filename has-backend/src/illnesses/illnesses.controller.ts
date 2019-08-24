import { Controller, HttpService, Get, Req } from '@nestjs/common';
import { IllnessesService } from './illnesses.service';
import { Request } from 'express';

@Controller('illnesses')
export class IllnessesController {

  constructor(private illnessesService: IllnessesService) {
  }

  @Get()
  async getIllnesses(@Req() request: Request) {
    return this.illnessesService.getIllnesses();
  }
}
