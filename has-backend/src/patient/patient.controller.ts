import { Controller, Post, Body } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';

const URL_SCOPE_VERSION: string = '/api/v1';

@Controller(`${URL_SCOPE_VERSION}/patient`)
export class PatientController {

  constructor(private patientsService: PatientService) {
  }

  @Post()
  async create(@Body() patient: Patient): Promise<Patient> {
    return await this.patientsService.create(patient);
  }
}
