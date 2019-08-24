import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient, CreatePatientDto } from './patient.model';

@Injectable()
export class PatientService {

  constructor(@InjectModel('Patients') private readonly patientModel: Model<Patient>) {
  }

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const createdPatient = new this.patientModel(createPatientDto);
    return await createdPatient.save();
  }
}
